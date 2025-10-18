"use client";

import { Menu, Bell } from "lucide-react";
import { useState } from "react"; // For local time
import SideMenu from "./SideMenu";
import { useMenuStore } from "../../_stores/MenuStores";

export default function MobileHeader() {
  const { toggle } = useMenuStore();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  return (
    <header className="fixed top-0 left-0 right-0 p-4 flex items-center justify-between bg-base-100 rounded-b-2xl border-b border-base-200 z-30">
      <button onClick={toggle} className="btn btn-ghost btn-sm p-0 h-8 w-8">
        <Menu className="h-5 w-5" />
      </button>
      <div className="text-center flex-1">
        <p className="text-sm text-base-content/70">{time}</p>
        <p className="text-base font-semibold text-base-content">
          Hello Ramtin
        </p>
      </div>
      <button className="btn btn-ghost btn-sm p-0 h-8 w-8">
        <Bell className="h-5 w-5" />
      </button>
      <SideMenu />
    </header>
  );
}
