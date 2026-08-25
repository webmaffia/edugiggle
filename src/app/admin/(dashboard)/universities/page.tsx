import Link from "next/link";
import { getUniversities } from "@/lib/courses";

export default async function AdminUniversitiesPage() {
  const universities = await getUniversities();

  return (
    <div>
      <Link href="/admin" className="text-sm text-primary font-semibold hover:underline">
        &larr; Back to dashboard
      </Link>
      <div className="flex items-center justify-between mt-2 mb-6">
        <h1 className="text-2xl font-extrabold text-secondary">Universities</h1>
        <Link
          href="/admin/universities/new"
          className="rounded-lg bg-primary text-white font-bold px-4 py-2 text-sm hover:opacity-90 transition"
        >
          + Add University
        </Link>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100">
        {universities.map((university) => (
          <Link
            key={university.slug}
            href={`/admin/universities/${university.slug}`}
            className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition"
          >
            <p className="font-bold text-secondary">{university.name}</p>
            <span className="text-sm text-primary font-semibold">Edit &rarr;</span>
          </Link>
        ))}
        {universities.length === 0 && <p className="px-6 py-8 text-center text-textMuted">No universities yet.</p>}
      </div>
    </div>
  );
}
