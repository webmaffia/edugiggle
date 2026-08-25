"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { University } from "@/lib/courses";

type Props = {
  initialUniversity: University;
  isNew: boolean;
  onSave: (university: University) => Promise<{ error?: string; success?: boolean }>;
  onDelete?: () => Promise<{ error?: string; success?: boolean }>;
};

const inputClass = "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary";
const labelClass = "block text-sm font-bold text-secondary mb-1.5";

export default function UniversityForm({ initialUniversity, isNew, onSave, onDelete }: Props) {
  const router = useRouter();
  const [university, setUniversity] = useState<University>(initialUniversity);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    const result = await onSave(university);
    setSaving(false);
    if (result.error) {
      setMessage({ text: result.error, isError: true });
    } else {
      setMessage({ text: "Saved successfully.", isError: false });
      if (isNew) router.push(`/admin/universities/${university.slug}`);
    }
  }

  async function handleDelete() {
    if (!onDelete) return;
    if (!confirm(`Delete "${university.name}"? This cannot be undone.`)) return;
    setSaving(true);
    const result = await onDelete();
    setSaving(false);
    if (result.error) {
      setMessage({ text: result.error, isError: true });
    } else {
      router.push("/admin/universities");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Slug (URL, unique)</label>
        <input
          className={inputClass}
          value={university.slug}
          onChange={(e) => setUniversity((prev) => ({ ...prev, slug: e.target.value }))}
          required
        />
      </div>
      <div>
        <label className={labelClass}>Name</label>
        <input
          className={inputClass}
          value={university.name}
          onChange={(e) => setUniversity((prev) => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>
      <div>
        <label className={labelClass}>Logo URL</label>
        <input
          className={inputClass}
          value={university.logo}
          onChange={(e) => setUniversity((prev) => ({ ...prev, logo: e.target.value }))}
        />
      </div>

      {message && <p className={`text-sm font-medium ${message.isError ? "text-red-600" : "text-green-600"}`}>{message.text}</p>}

      <div className="flex items-center gap-3">
        <button type="submit" disabled={saving} className="rounded-lg bg-primary text-white font-bold px-6 py-2.5 text-sm hover:opacity-90 transition disabled:opacity-60">
          {saving ? "Saving..." : "Save university"}
        </button>
        {onDelete && (
          <button type="button" onClick={handleDelete} disabled={saving} className="rounded-lg border border-red-300 text-red-600 font-bold px-6 py-2.5 text-sm hover:bg-red-50 transition disabled:opacity-60">
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
