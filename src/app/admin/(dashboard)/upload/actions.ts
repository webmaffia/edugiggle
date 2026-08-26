"use server";

import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import { put } from "@vercel/blob";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const MAX_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
};

export async function uploadImageAction(formData: FormData): Promise<{ url?: string; error?: string }> {
  const file = formData.get("file");
  if (!(file instanceof File)) return { error: "No file provided." };

  if (file.size === 0) return { error: "File is empty." };
  if (file.size > MAX_SIZE_BYTES) return { error: "Image must be smaller than 5MB." };

  const extension = ALLOWED_TYPES[file.type];
  if (!extension) return { error: "Unsupported file type. Use JPG, PNG, WEBP, GIF or SVG." };

  const fileName = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}.${extension}`;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const blob = await put(`uploads/${fileName}`, file, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });
      return { url: blob.url };
    } catch {
      return { error: "Upload to cloud storage failed. Please try again." };
    }
  }

  try {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(path.join(UPLOAD_DIR, fileName), buffer);
    return { url: `/uploads/${fileName}` };
  } catch {
    return {
      error:
        "Upload failed: this server's filesystem isn't writable (e.g. Vercel). Set up Vercel Blob storage (BLOB_READ_WRITE_TOKEN) to enable uploads here.",
    };
  }
}
