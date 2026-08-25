"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { createSessionCookie } from "@/lib/admin/session";

export type LoginState = { error?: string };

export async function loginAction(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");

  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !adminPasswordHash) {
    return { error: "Admin credentials are not configured on the server." };
  }

  if (email !== adminEmail) {
    return { error: "Invalid email or password." };
  }

  const isValid = await bcrypt.compare(password, adminPasswordHash);
  if (!isValid) {
    return { error: "Invalid email or password." };
  }

  await createSessionCookie(email);
  redirect(next.startsWith("/admin") ? next : "/admin");
}
