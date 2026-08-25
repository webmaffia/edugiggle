"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Course, CourseOffering, University } from "@/lib/courses";

type Props = {
  initialCourse: Course;
  universities: University[];
  isNew: boolean;
  onSave: (course: Course) => Promise<{ error?: string; success?: boolean }>;
  onDelete?: () => Promise<{ error?: string; success?: boolean }>;
};

function emptyOffering(): CourseOffering {
  return { universitySlug: "", mode: "", duration: "", fees: "", note: "" };
}

const inputClass = "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary";
const labelClass = "block text-sm font-bold text-secondary mb-1.5";

export default function CourseForm({ initialCourse, universities, isNew, onSave, onDelete }: Props) {
  const router = useRouter();
  const [course, setCourse] = useState<Course>(initialCourse);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  function set<K extends keyof Course>(key: K, value: Course[K]) {
    setCourse((prev) => ({ ...prev, [key]: value }));
  }

  function setStringList(key: "highlights" | "careerProspects", index: number, value: string) {
    const next = [...course[key]];
    next[index] = value;
    set(key, next);
  }

  function addStringListItem(key: "highlights" | "careerProspects") {
    set(key, [...course[key], ""]);
  }

  function removeStringListItem(key: "highlights" | "careerProspects", index: number) {
    set(
      key,
      course[key].filter((_, i) => i !== index)
    );
  }

  function setOffering(index: number, patch: Partial<CourseOffering>) {
    const next = [...course.offerings];
    next[index] = { ...next[index], ...patch };
    set("offerings", next);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    const result = await onSave(course);
    setSaving(false);
    if (result.error) {
      setMessage({ text: result.error, isError: true });
    } else {
      setMessage({ text: "Saved successfully.", isError: false });
      if (isNew) router.push(`/admin/courses/${course.slug}`);
    }
  }

  async function handleDelete() {
    if (!onDelete) return;
    if (!confirm(`Delete "${course.name}"? This cannot be undone.`)) return;
    setSaving(true);
    const result = await onDelete();
    setSaving(false);
    if (result.error) {
      setMessage({ text: result.error, isError: true });
    } else {
      router.push("/admin/courses");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Slug (URL, unique)</label>
          <input className={inputClass} value={course.slug} onChange={(e) => set("slug", e.target.value)} required />
        </div>
        <div>
          <label className={labelClass}>Short name (e.g. BBA)</label>
          <input className={inputClass} value={course.name} onChange={(e) => set("name", e.target.value)} required />
        </div>
        <div>
          <label className={labelClass}>Full name</label>
          <input className={inputClass} value={course.fullName} onChange={(e) => set("fullName", e.target.value)} required />
        </div>
        <div>
          <label className={labelClass}>Level</label>
          <select className={inputClass} value={course.level} onChange={(e) => set("level", e.target.value as Course["level"])}>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Duration</label>
          <input className={inputClass} value={course.duration} onChange={(e) => set("duration", e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Tag</label>
          <input className={inputClass} value={course.tag} onChange={(e) => set("tag", e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>Image URL</label>
          <input className={inputClass} value={course.image} onChange={(e) => set("image", e.target.value)} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Description</label>
        <textarea className={inputClass} rows={3} value={course.description} onChange={(e) => set("description", e.target.value)} />
      </div>

      <div>
        <label className={labelClass}>Eligibility</label>
        <textarea className={inputClass} rows={2} value={course.eligibility} onChange={(e) => set("eligibility", e.target.value)} />
      </div>

      {(["highlights", "careerProspects"] as const).map((key) => (
        <div key={key}>
          <label className={labelClass}>{key === "highlights" ? "Highlights" : "Career Prospects"}</label>
          <div className="space-y-2">
            {course[key].map((item, i) => (
              <div key={i} className="flex gap-2">
                <input className={`flex-1 ${inputClass}`} value={item} onChange={(e) => setStringList(key, i, e.target.value)} />
                <button type="button" onClick={() => removeStringListItem(key, i)} className="px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg">
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addStringListItem(key)} className="text-sm font-semibold text-primary hover:underline">
              + Add item
            </button>
          </div>
        </div>
      ))}

      <div>
        <label className={labelClass}>University Offerings</label>
        <div className="space-y-4">
          {course.offerings.map((offering, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-textMuted uppercase">Offering {i + 1}</span>
                <button
                  type="button"
                  onClick={() => set("offerings", course.offerings.filter((_, idx) => idx !== i))}
                  className="text-xs font-semibold text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-secondary mb-1">University</label>
                  <select className={inputClass} value={offering.universitySlug} onChange={(e) => setOffering(i, { universitySlug: e.target.value })}>
                    <option value="">Select university</option>
                    {universities.map((u) => (
                      <option key={u.slug} value={u.slug}>
                        {u.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-secondary mb-1">Mode</label>
                  <input className={inputClass} value={offering.mode} onChange={(e) => setOffering(i, { mode: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-secondary mb-1">Duration</label>
                  <input className={inputClass} value={offering.duration} onChange={(e) => setOffering(i, { duration: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-secondary mb-1">Fees</label>
                  <input className={inputClass} value={offering.fees} onChange={(e) => setOffering(i, { fees: e.target.value })} />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-secondary mb-1">Note (optional)</label>
                  <input className={inputClass} value={offering.note ?? ""} onChange={(e) => setOffering(i, { note: e.target.value })} />
                </div>
              </div>
            </div>
          ))}
          <button type="button" onClick={() => set("offerings", [...course.offerings, emptyOffering()])} className="text-sm font-semibold text-primary hover:underline">
            + Add offering
          </button>
        </div>
      </div>

      {message && <p className={`text-sm font-medium ${message.isError ? "text-red-600" : "text-green-600"}`}>{message.text}</p>}

      <div className="flex items-center gap-3">
        <button type="submit" disabled={saving} className="rounded-lg bg-primary text-white font-bold px-6 py-2.5 text-sm hover:opacity-90 transition disabled:opacity-60">
          {saving ? "Saving..." : "Save course"}
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
