"use server";

import { revalidatePath } from "next/cache";
import { readCollection, writeCollection } from "@/lib/content-store";
import type { University } from "@/lib/courses";

export async function saveUniversityAction(originalSlug: string | null, university: University) {
  if (!university.slug.trim()) return { error: "Slug is required." };

  const universities = await readCollection<University>("universities.json");
  const existingIndex = originalSlug ? universities.findIndex((u) => u.slug === originalSlug) : -1;

  const slugTaken = universities.some((u, i) => u.slug === university.slug && i !== existingIndex);
  if (slugTaken) return { error: "A university with this slug already exists." };

  if (existingIndex >= 0) {
    universities[existingIndex] = university;
  } else {
    universities.push(university);
  }

  await writeCollection("universities.json", universities);
  revalidatePath("/courses");
  revalidatePath("/");
  return { success: true };
}

export async function deleteUniversityAction(slug: string) {
  const universities = await readCollection<University>("universities.json");
  await writeCollection(
    "universities.json",
    universities.filter((u) => u.slug !== slug)
  );
  revalidatePath("/courses");
  revalidatePath("/");
  return { success: true };
}
