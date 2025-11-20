"use client";

import { PanelLeftOpen } from "lucide-react";
import { useDashboardStore } from "@/app/dashboard/store";
import clsx from "clsx";

function HeaderRight() {
  const { sideBarIsOpen, setSideBarIsOpen } = useDashboardStore();

  return (
    <div className="flex items-center">
      <button
        onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
        className={clsx(
          "flex items-center hover:cursor-pointer justify-center w-15 h-10 bg-gray-50 border-b border-gray-200 hover:bg-gray-100 transition-all duration-500 ",
          "md:w-15",
        )}
      >
        <PanelLeftOpen
          color="#757575"
          size={24}
          className={clsx(
            "transition-transform duration-500 ",
            sideBarIsOpen ? "rotate-0" : "rotate-180",
          )}
        />
      </button>

      <h1 className="mr-3 sm:mr-6 font-bold text-xs sm:text-sm md:text-base">داشبورد</h1>
    </div>
  );
}

export default HeaderRight;
