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
  const hasBlobToken = Boolean(process.env.BLOB_READ_WRITE_TOKEN);
  const tokenPrefix = process.env.BLOB_READ_WRITE_TOKEN ? process.env.BLOB_READ_WRITE_TOKEN.slice(0, 12) + "..." : "(not set)";
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
        <Row label="Image upload backend" value={hasBlobToken ? "Vercel Blob" : "Local filesystem"} ok={hasBlobToken || !isVercel} />
        <Row label="BLOB_READ_WRITE_TOKEN detected" value={String(hasBlobToken)} ok={hasBlobToken} />
        <Row label="Token prefix" value={tokenPrefix} />
      </div>
      <p className="text-sm text-textMuted mt-4 max-w-xl">
        If &quot;Running on Vercel&quot; is true and &quot;BLOB_READ_WRITE_TOKEN detected&quot; is false, the token isn&apos;t reaching this
        deployment — recheck that the Blob store is attached to <strong>this exact project</strong> and that the variable is enabled for
        the environment shown above (&quot;Vercel environment&quot;), then redeploy.
      </p>
    </div>
  );
}
