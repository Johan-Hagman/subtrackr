export default function Header() {
  return (
    <header className="h-16 bg-base-100 flex items-center justify-between px-6 shadow">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <button className="btn btn-sm btn-outline">Logga ut</button>
    </header>
  );
}
