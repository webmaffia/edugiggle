import Link from "next/link";
import { notFound } from "next/navigation";
import { getSectionDefinition } from "@/lib/admin/sectionSchemas";
import { readSection } from "@/lib/content-store";
import AdminSectionForm from "@/components/admin/AdminSectionForm";
import { saveSectionAction } from "./actions";

export default async function AdminSectionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const definition = getSectionDefinition(id);
  if (!definition) notFound();

  const initialData = await readSection<Record<string, unknown>>(id, {});
  const boundAction = saveSectionAction.bind(null, id);

  return (
    <div>
      <Link href="/admin" className="text-sm text-primary font-semibold hover:underline">
        &larr; Back to dashboard
      </Link>
      <h1 className="text-2xl font-extrabold text-secondary mt-2 mb-6">Edit: {definition.label}</h1>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 max-w-2xl">
        <AdminSectionForm fields={definition.fields} initialData={initialData} action={boundAction} />
      </div>
    </div>
  );
}
