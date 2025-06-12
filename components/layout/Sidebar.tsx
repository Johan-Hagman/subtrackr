export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-base-200 p-4">
      <h2 className="text-xl font-bold mb-6">SubTrackr</h2>
      <ul className="menu">
        <li>
          <a>Översikt</a>
        </li>
        <li>
          <a>Prenumerationer</a>
        </li>
        <li>
          <a>Inställningar</a>
        </li>
      </ul>
    </aside>
  );
}
