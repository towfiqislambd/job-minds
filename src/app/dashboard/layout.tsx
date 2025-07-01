export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="/dashboard">Home</a>
          </li>
          <li>
            <a href="/dashboard/settings">Settings</a>
          </li>
          <li>
            <a href="/dashboard/users">Users</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
