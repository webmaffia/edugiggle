import Link from "next/link";
import { notFound } from "next/navigation";
import { getUniversityBySlug } from "@/lib/courses";
import UniversityForm from "@/components/admin/UniversityForm";
import { saveUniversityAction, deleteUniversityAction } from "../actions";

export default async function EditUniversityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const university = await getUniversityBySlug(slug);
  if (!university) notFound();

  const boundSave = saveUniversityAction.bind(null, slug);
  const boundDelete = deleteUniversityAction.bind(null, slug);

  return (
    <div>
      <Link href="/admin/universities" className="text-sm text-primary font-semibold hover:underline">
        &larr; Back to universities
      </Link>
      <h1 className="text-2xl font-extrabold text-secondary mt-2 mb-6">Edit: {university.name}</h1>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 max-w-xl">
        <UniversityForm initialUniversity={university} isNew={false} onSave={boundSave} onDelete={boundDelete} />
      </div>
    </div>
  );
}
