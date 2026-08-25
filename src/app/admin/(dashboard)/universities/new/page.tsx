import Link from "next/link";
import UniversityForm from "@/components/admin/UniversityForm";
import { saveUniversityAction } from "../actions";

const emptyUniversity = { slug: "", name: "", logo: "" };

export default function NewUniversityPage() {
  const boundSave = saveUniversityAction.bind(null, null);

  return (
    <div>
      <Link href="/admin/universities" className="text-sm text-primary font-semibold hover:underline">
        &larr; Back to universities
      </Link>
      <h1 className="text-2xl font-extrabold text-secondary mt-2 mb-6">Add University</h1>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 max-w-xl">
        <UniversityForm initialUniversity={emptyUniversity} isNew onSave={boundSave} />
      </div>
    </div>
  );
}
