import { promises as fs } from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

async function readJsonFile<T>(fileName: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(path.join(CONTENT_DIR, fileName), "utf-8");
    return JSON.parse(raw) as T;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return fallback;
    throw err;
  }
}

async function writeJsonFile<T>(fileName: string, data: T): Promise<void> {
  await fs.mkdir(CONTENT_DIR, { recursive: true });
  await fs.writeFile(path.join(CONTENT_DIR, fileName), JSON.stringify(data, null, 2), "utf-8");
}

export async function readCollection<T>(fileName: string): Promise<T[]> {
  return readJsonFile<T[]>(fileName, []);
}

export async function writeCollection<T>(fileName: string, data: T[]): Promise<void> {
  await writeJsonFile(fileName, data);
}

export async function readSections(): Promise<Record<string, unknown>> {
  return readJsonFile<Record<string, unknown>>("sections.json", {});
}

export async function readSection<T>(id: string, fallback: T): Promise<T> {
  const sections = await readSections();
  return (sections[id] as T | undefined) ?? fallback;
}

export async function writeSection(id: string, data: unknown): Promise<void> {
  const sections = await readSections();
  sections[id] = data;
  await writeJsonFile("sections.json", sections);
}
