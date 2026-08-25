import Link from "next/link";
import { getUniversities } from "@/lib/courses";
import CourseForm from "@/components/admin/CourseForm";
import { saveCourseAction } from "../actions";

const emptyCourse = {
  slug: "",
  name: "",
  fullName: "",
  level: "UG" as const,
  duration: "",
  tag: "",
  image: "",
  description: "",
  eligibility: "",
  highlights: [],
  careerProspects: [],
  offerings: [],
};

export default async function NewCoursePage() {
  const universities = await getUniversities();
  const boundSave = saveCourseAction.bind(null, null);

  return (
    <div>
      <Link href="/admin/courses" className="text-sm text-primary font-semibold hover:underline">
        &larr; Back to courses
      </Link>
      <h1 className="text-2xl font-extrabold text-secondary mt-2 mb-6">Add Course</h1>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 max-w-3xl">
        <CourseForm initialCourse={emptyCourse} universities={universities} isNew onSave={boundSave} />
      </div>
    </div>
  );
}
