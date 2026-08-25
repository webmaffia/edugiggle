"use server";

import { revalidatePath } from "next/cache";
import { readCollection, writeCollection } from "@/lib/content-store";
import type { Course } from "@/lib/courses";

export async function saveCourseAction(originalSlug: string | null, course: Course) {
  if (!course.slug.trim()) return { error: "Slug is required." };

  const courses = await readCollection<Course>("courses.json");
  const existingIndex = originalSlug ? courses.findIndex((c) => c.slug === originalSlug) : -1;

  const slugTaken = courses.some((c, i) => c.slug === course.slug && i !== existingIndex);
  if (slugTaken) return { error: "A course with this slug already exists." };

  if (existingIndex >= 0) {
    courses[existingIndex] = course;
  } else {
    courses.push(course);
  }

  await writeCollection("courses.json", courses);
  revalidatePath("/courses");
  revalidatePath(`/courses/${course.slug}`);
  revalidatePath("/");
  return { success: true };
}

export async function deleteCourseAction(slug: string) {
  const courses = await readCollection<Course>("courses.json");
  await writeCollection(
    "courses.json",
    courses.filter((c) => c.slug !== slug)
  );
  revalidatePath("/courses");
  revalidatePath("/");
  return { success: true };
}
