import { readCollection } from "./content-store";

export type University = {
  slug: string;
  name: string;
  logo: string;
};

export type CourseOffering = {
  universitySlug: string;
  mode: string;
  duration: string;
  fees: string;
  note?: string;
};

export type Course = {
  slug: string;
  name: string;
  fullName: string;
  level: "UG" | "PG";
  duration: string;
  tag: string;
  image: string;
  description: string;
  eligibility: string;
  highlights: string[];
  careerProspects: string[];
  offerings: CourseOffering[];
};

export async function getCourses(): Promise<Course[]> {
  return readCollection<Course>("courses.json");
}

export async function getUniversities(): Promise<University[]> {
  return readCollection<University>("universities.json");
}

export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  const courses = await getCourses();
  return courses.find((c) => c.slug === slug);
}

export async function getUniversityBySlug(slug: string): Promise<University | undefined> {
  const universities = await getUniversities();
  return universities.find((u) => u.slug === slug);
}
