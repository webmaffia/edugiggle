import Link from "next/link";
import { getCourses } from "@/lib/courses";

export default async function AdminCoursesPage() {
  const courses = await getCourses();

  return (
    <div>
      <Link href="/admin" className="text-sm text-primary font-semibold hover:underline">
        &larr; Back to dashboard
      </Link>
      <div className="flex items-center justify-between mt-2 mb-6">
        <h1 className="text-2xl font-extrabold text-secondary">Courses</h1>
        <Link
          href="/admin/courses/new"
          className="rounded-lg bg-primary text-white font-bold px-4 py-2 text-sm hover:opacity-90 transition"
        >
          + Add Course
        </Link>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100">
        {courses.map((course) => (
          <Link
            key={course.slug}
            href={`/admin/courses/${course.slug}`}
            className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition"
          >
            <div>
              <p className="font-bold text-secondary">
                {course.name} <span className="font-normal text-textMuted">— {course.fullName}</span>
              </p>
              <p className="text-xs text-textMuted mt-0.5">
                {course.level} · {course.duration} · {course.offerings.length} universities
              </p>
            </div>
            <span className="text-sm text-primary font-semibold">Edit &rarr;</span>
          </Link>
        ))}
        {courses.length === 0 && <p className="px-6 py-8 text-center text-textMuted">No courses yet.</p>}
      </div>
    </div>
  );
}
