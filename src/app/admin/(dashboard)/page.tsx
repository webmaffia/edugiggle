import Link from "next/link";
import { SECTION_DEFINITIONS } from "@/lib/admin/sectionSchemas";

function DashboardCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="block bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all">
      <p className="font-bold text-secondary">{title}</p>
      <p className="text-sm text-textMuted mt-1">{description}</p>
    </Link>
  );
}

export default function AdminDashboardPage() {
  const homepageSections = SECTION_DEFINITIONS.filter((s) => s.group === "Homepage");
  const staticPages = SECTION_DEFINITIONS.filter((s) => s.group === "Static Pages");

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-extrabold text-secondary mb-1">Content Dashboard</h1>
        <p className="text-textMuted text-sm">Manage everything shown on the public site.</p>
      </div>

      <div>
        <h2 className="text-lg font-bold text-secondary mb-3">Courses &amp; Universities</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <DashboardCard href="/admin/courses" title="Courses" description="Add, edit or remove UG/PG courses and their university offerings." />
          <DashboardCard href="/admin/universities" title="Universities" description="Manage partner universities and their logos." />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-secondary mb-3">Homepage Sections</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {homepageSections.map((section) => (
            <DashboardCard
              key={section.id}
              href={`/admin/sections/${section.id}`}
              title={section.label}
              description={`Edit the ${section.label} section of the homepage.`}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-secondary mb-3">Static Pages</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {staticPages.map((section) => (
            <DashboardCard
              key={section.id}
              href={`/admin/sections/${section.id}`}
              title={section.label}
              description={`Edit the content of the ${section.label} page.`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
