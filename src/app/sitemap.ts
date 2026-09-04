import { MetadataRoute } from "next";
import { getCourses } from "@/lib/courses";

const baseUrl = "https://edugiggle.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const courses = await getCourses();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/courses`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about-us`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact-us`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/counselling`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/placement`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...courseRoutes];
}
