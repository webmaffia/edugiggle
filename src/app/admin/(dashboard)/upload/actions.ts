"use server";

import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

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

  await fs.mkdir(UPLOAD_DIR, { recursive: true });

  const fileName = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}.${extension}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(UPLOAD_DIR, fileName), buffer);

  return { url: `/uploads/${fileName}` };
}
