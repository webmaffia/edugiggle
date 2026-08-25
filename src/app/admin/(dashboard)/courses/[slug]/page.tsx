import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseBySlug, getUniversities } from "@/lib/courses";
import CourseForm from "@/components/admin/CourseForm";
import { saveCourseAction, deleteCourseAction } from "../actions";

export default async function EditCoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [course, universities] = await Promise.all([getCourseBySlug(slug), getUniversities()]);
  if (!course) notFound();

  const boundSave = saveCourseAction.bind(null, slug);
  const boundDelete = deleteCourseAction.bind(null, slug);

  return (
    <div>
      <Link href="/admin/courses" className="text-sm text-primary font-semibold hover:underline">
        &larr; Back to courses
      </Link>
      <h1 className="text-2xl font-extrabold text-secondary mt-2 mb-6">Edit: {course.name}</h1>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 max-w-3xl">
        <CourseForm initialCourse={course} universities={universities} isNew={false} onSave={boundSave} onDelete={boundDelete} />
      </div>
    </div>
  );
}
