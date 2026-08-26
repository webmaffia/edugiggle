"use client";

import { useRef, useState } from "react";
import { uploadImageAction } from "@/app/admin/(dashboard)/upload/actions";

type Props = {
  value: string;
  onChange: (url: string) => void;
};

export default function ImageUploadField({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.set("file", file);
    const result = await uploadImageAction(formData);

    setUploading(false);
    if (result.error) {
      setError(result.error);
    } else if (result.url) {
      onChange(result.url);
    }
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="space-y-2">
      {value && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" className="h-20 w-auto max-w-[160px] object-contain rounded-lg border border-gray-200 bg-white p-1" />
      )}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Image URL, or upload a file"
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <label className="shrink-0 cursor-pointer rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-secondary hover:bg-gray-50 transition">
          {uploading ? "Uploading..." : "Upload"}
          <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} disabled={uploading} />
        </label>
      </div>
      {error && <p className="text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
