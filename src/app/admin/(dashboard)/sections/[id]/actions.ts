"use server";

import { revalidatePath } from "next/cache";
import { writeSection } from "@/lib/content-store";
import { getSectionDefinition } from "@/lib/admin/sectionSchemas";

export async function saveSectionAction(id: string, data: Record<string, unknown>) {
  const definition = getSectionDefinition(id);
  if (!definition) return { error: "Unknown section." };

  await writeSection(id, data);

  for (const path of definition.revalidatePaths) {
    revalidatePath(path);
  }

  return { success: true };
}
