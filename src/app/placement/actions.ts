"use server";

import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import { put } from "@vercel/blob";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "resumes");
const MAX_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES: Record<string, string> = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
};

export async function uploadResumeAction(formData: FormData): Promise<{ url?: string; fileName?: string; error?: string }> {
  const file = formData.get("file");
  if (!(file instanceof File)) return { error: "No file provided." };

  if (file.size === 0) return { error: "File is empty." };
  if (file.size > MAX_SIZE_BYTES) return { error: "Resume must be smaller than 5MB." };

  const extension = ALLOWED_TYPES[file.type];
  if (!extension) return { error: "Unsupported file type. Please upload a PDF, DOC or DOCX." };

  const fileName = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}.${extension}`;

  const hasBlobStore = Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);
  if (hasBlobStore) {
    try {
      const blob = await put(`uploads/resumes/${fileName}`, file, { access: "public" });
      return { url: blob.url, fileName: file.name };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { error: `Upload to cloud storage failed: ${message}` };
    }
  }

  try {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(path.join(UPLOAD_DIR, fileName), buffer);
    return { url: `/uploads/resumes/${fileName}`, fileName: file.name };
  } catch {
    return {
      error:
        "Upload failed: this server's filesystem isn't writable (e.g. Vercel). Set up Vercel Blob storage (BLOB_READ_WRITE_TOKEN) to enable uploads here.",
    };
  }
}
