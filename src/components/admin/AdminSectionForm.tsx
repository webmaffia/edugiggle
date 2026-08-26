"use client";

import { useState } from "react";
import type { FieldSchema } from "@/lib/admin/sectionSchemas";
import ImageUploadField from "./ImageUploadField";

type Props = {
  fields: FieldSchema[];
  initialData: Record<string, unknown>;
  action: (data: Record<string, unknown>) => Promise<{ error?: string; success?: boolean }>;
};

function emptyItem(fields: FieldSchema[]): Record<string, unknown> {
  const item: Record<string, unknown> = {};
  for (const f of fields) item[f.key] = f.type === "list" ? [] : "";
  return item;
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: FieldSchema;
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  if (field.type === "text") {
    return (
      <input
        type="text"
        value={(value as string) ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    );
  }

  if (field.type === "image-url") {
    return <ImageUploadField value={(value as string) ?? ""} onChange={onChange} />;
  }

  if (field.type === "textarea") {
    return (
      <textarea
        value={(value as string) ?? ""}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    );
  }

  if (field.type === "string-list") {
    const items = (value as string[]) ?? [];
    return (
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => {
                const next = [...items];
                next[i] = e.target.value;
                onChange(next);
              }}
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="button"
              onClick={() => onChange(items.filter((_, idx) => idx !== i))}
              className="px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...items, ""])}
          className="text-sm font-semibold text-primary hover:underline"
        >
          + Add {field.itemLabel}
        </button>
      </div>
    );
  }

  if (field.type === "list") {
    const items = (value as Record<string, unknown>[]) ?? [];
    return (
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-textMuted uppercase">
                {field.itemLabel} {i + 1}
              </span>
              <button
                type="button"
                onClick={() => onChange(items.filter((_, idx) => idx !== i))}
                className="text-xs font-semibold text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
            {field.fields.map((subField) => (
              <div key={subField.key}>
                <label className="block text-xs font-semibold text-secondary mb-1">{subField.label}</label>
                <FieldInput
                  field={subField}
                  value={item[subField.key]}
                  onChange={(v) => {
                    const next = [...items];
                    next[i] = { ...next[i], [subField.key]: v };
                    onChange(next);
                  }}
                />
              </div>
            ))}
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...items, emptyItem(field.fields)])}
          className="text-sm font-semibold text-primary hover:underline"
        >
          + Add {field.itemLabel}
        </button>
      </div>
    );
  }

  return null;
}

export default function AdminSectionForm({ fields, initialData, action }: Props) {
  const [data, setData] = useState<Record<string, unknown>>(initialData);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try {
      const result = await action(data);
      if (result.error) {
        setMessage({ text: result.error, isError: true });
      } else {
        setMessage({ text: "Saved successfully.", isError: false });
      }
    } catch {
      setMessage({ text: "Save failed. Please try again.", isError: true });
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.key}>
          <label className="block text-sm font-bold text-secondary mb-1.5">{field.label}</label>
          <FieldInput
            field={field}
            value={data[field.key]}
            onChange={(v) => setData((prev) => ({ ...prev, [field.key]: v }))}
          />
        </div>
      ))}

      {message && (
        <p className={`text-sm font-medium ${message.isError ? "text-red-600" : "text-green-600"}`}>{message.text}</p>
      )}

      <button
        type="submit"
        disabled={saving}
        className="rounded-lg bg-primary text-white font-bold px-6 py-2.5 text-sm hover:opacity-90 transition disabled:opacity-60"
      >
        {saving ? "Saving..." : "Save changes"}
      </button>
    </form>
  );
}
