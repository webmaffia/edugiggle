import Link from "next/link";

function Row({ label, value, ok }: { label: string; value: string; ok?: boolean }) {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <span className="text-sm font-semibold text-secondary">{label}</span>
      <span className={`text-sm font-mono ${ok === false ? "text-red-600" : ok === true ? "text-green-600" : "text-textMuted"}`}>{value}</span>
    </div>
  );
}

export default function DiagnosticsPage() {
  const hasStaticToken = Boolean(process.env.BLOB_READ_WRITE_TOKEN);
  const hasStoreId = Boolean(process.env.BLOB_STORE_ID);
  const hasBlobStore = hasStaticToken || hasStoreId;
  const isVercel = Boolean(process.env.VERCEL);
  const vercelEnv = process.env.VERCEL_ENV ?? "(not set)";

  return (
    <div>
      <Link href="/admin" className="text-sm text-primary font-semibold hover:underline">
        &larr; Back to dashboard
      </Link>
      <h1 className="text-2xl font-extrabold text-secondary mt-2 mb-6">Diagnostics</h1>
      <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100 max-w-xl">
        <Row label="Running on Vercel" value={String(isVercel)} />
        <Row label="Vercel environment" value={vercelEnv} />
        <Row label="Image upload backend" value={hasBlobStore ? "Vercel Blob" : "Local filesystem"} ok={hasBlobStore || !isVercel} />
        <Row label="BLOB_STORE_ID detected (OIDC)" value={String(hasStoreId)} ok={hasStoreId} />
        <Row label="BLOB_READ_WRITE_TOKEN detected (static)" value={String(hasStaticToken)} ok={hasStaticToken} />
      </div>
      <p className="text-sm text-textMuted mt-4 max-w-xl">
        Either row being true is enough — a store connected via OIDC only sets <code>BLOB_STORE_ID</code>, while an older-style connection
        sets <code>BLOB_READ_WRITE_TOKEN</code>. If both are false and &quot;Running on Vercel&quot; is true, the Blob store isn&apos;t
        reaching this deployment — recheck that it&apos;s attached to <strong>this exact project</strong> for the environment shown above,
        then redeploy.
      </p>
    </div>
  );
}
