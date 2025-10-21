"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  ChevronLeft,
  BookOpen,
  TrendingUp,
  Calendar,
  HelpCircle,
  Settings,
  TrendingUp as GraphIcon,
} from "lucide-react";
import { useMenuStore } from "../../_stores/MenuStores";

const SideMenu = () => {
  const router = useRouter();
  const { isOpen, toggle, close } = useMenuStore();

  useEffect(() => {
    if (isOpen)
      document.body.classList.add("overflow-hidden"); // Prevent scroll
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleBack = () => {
    close();
    setTimeout(() => router.back(), 200); // Smooth close
  };

  const handleNav = (href: string) => {
    close();
    router.push(href);
  };

  return (
    <div className={`drawer ${isOpen ? "drawer-open" : ""}`}>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={toggle}
      />
      <div className="drawer-content flex flex-col">
        {/* Content placeholder - actual content in pages */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          className="drawer-overlay"
          onClick={close}
        ></label>
        <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content border-r border-base-200">
          {/* Header: Back + Profile */}
          <div className="mb-4 flex items-center justify-between p-2">
            <button onClick={handleBack} className="btn btn-ghost btn-sm">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3">
              <img
                src="/profile.jpg"
                alt="Ramtin"
                className="w-10 h-10 rounded-full border-2 border-primary"
              />
              <div>
                <p className="text-sm font-semibold">Ramtin Ramezani</p>
                <p className="text-xs text-base-content/70">
                  Keep Plan for 1 Day
                </p>
              </div>
            </div>
            <div className="w-8" />
          </div>

          {/* Menu Items */}
          <li>
            <button
              className="btn btn-ghost w-full justify-start gap-2"
              onClick={() => handleNav("/tasks")}
            >
              <BookOpen className="h-4 w-4" />
              Tasks
            </button>
          </li>
          <li>
            <button
              className="btn btn-ghost w-full justify-start gap-2"
              onClick={() => handleNav("/categories")}
            >
              <TrendingUp className="h-4 w-4" />
              Categories
            </button>
          </li>
          <li>
            <button
              className="btn btn-ghost w-full justify-start gap-2"
              onClick={() => handleNav("/create")}
            >
              <Calendar className="h-4 w-4" />
              Create New
            </button>
          </li>
          <li>
            <button
              className="btn btn-ghost w-full justify-start gap-2"
              onClick={() => handleNav("/faq")}
            >
              <HelpCircle className="h-4 w-4" />
              FAQ
            </button>
          </li>
          <li>
            <button
              className="btn btn-ghost w-full justify-start gap-2"
              onClick={() => handleNav("/settings")}
            >
              <Settings className="h-4 w-4" />
              Settings
            </button>
          </li>

          {/* Consistency - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-base-200 bg-base-100">
            <p className="text-sm font-semibold mb-2 text-base-content">
              Consistency
            </p>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span className="text-sm text-success font-semibold">Good</span>
            </div>
            <div className="h-16 bg-base-200 rounded flex items-center justify-center">
              <GraphIcon className="h-6 w-6 text-primary opacity-50" />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
