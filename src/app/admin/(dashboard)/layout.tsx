import Link from "next/link";
import { logoutAction } from "../logout/actions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/admin" className="font-extrabold text-secondary">
            EduGiggle Admin
          </Link>
          <form action={logoutAction}>
            <button type="submit" className="text-sm font-semibold text-textMuted hover:text-secondary">
              Log out
            </button>
          </form>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">{children}</main>
    </div>
  );
}
