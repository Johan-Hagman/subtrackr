import Image from "next/image";

import DashboardLayout from "./../../components/layout/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="text-lg">👋 Välkommen till SubTrackr!</div>
    </DashboardLayout>
  );
}
