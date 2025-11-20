"use client";

import { ReactElement, useEffect, useState } from "react";
import { Home, BarChart2, CalendarDays } from "lucide-react";
import clsx from "clsx";
import { useDashboardStore } from "@/app/dashboard/store";
import SidebarSettings from "./components/SidebarSettings";
import SidebarNav from "./components/SidebarNav";
import SidebarSearch from "./components/SidebarSearch";

export interface SubItem {
  id: number;
  label: string;
}

export interface MenuItem {
  id: number;
  label: string;
  icon: ReactElement;
  subItems?: SubItem[];
}

export interface SidebarState {
  activeItemId: number | null;
  activeSubItemId: number | null;
  openSubMenu: number | null;
  isMounted: boolean;
  animateWidth: boolean;
  activeSettingButtom: boolean;
}

const Sidebar = () => {
  const { sideBarIsOpen, setSideBarIsOpen, screenIsMobile, setScreenIsMobile } =
    useDashboardStore();

  const [state, setState] = useState<SidebarState>({
    activeItemId: null,
    activeSubItemId: null,
    openSubMenu: null,
    isMounted: false,
    animateWidth: false,
    activeSettingButtom: false,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const menuItems: MenuItem[] = [
    {
      id: 1,
      label: "خانه",
      icon: <Home size={20} />,
      subItems: [
        { id: 101, label: "نمای کلی" },
        { id: 102, label: "آخرین فعالیت‌ها" },
      ],
    },
    {
      id: 2,
      label: "گزارشات",
      icon: <BarChart2 size={20} />,
      subItems: [
        { id: 201, label: "گزارش فروش" },
        { id: 202, label: "گزارش کاربران" },
        { id: 203, label: "آمار کلی" },
      ],
    },
    {
      id: 3,
      label: "برنامه ریزی",
      icon: <CalendarDays size={20} />,
      subItems: [
        { id: 301, label: "خرید" },
        { id: 302, label: "فروش" },
        { id: 303, label: "جلسات روزانه" },
        { id: 304, label: "جلسات هفتگی" },
        { id: 305, label: "جلسات ماهانه" },
      ],
    },
  ];

  const filteredMenuItems: MenuItem[] = menuItems
    .map((item) => {
      if (item.subItems) {
        const filteredSubs = item.subItems.filter((sub) =>
          sub.label.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        if (
          item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          filteredSubs.length > 0
        ) {
          return { ...item, subItems: filteredSubs };
        }
        return null;
      }
      return item.label.toLowerCase().includes(searchTerm.toLowerCase()) ? item : null;
    })
    .filter((item): item is MenuItem => item !== null);

  useEffect(() => {
    const checkMobile = () => setScreenIsMobile(window.innerWidth < 768);
    setState((prev) => ({ ...prev, screenIsMobile: window.innerWidth < 768 }));
    checkMobile();
    window.addEventListener("resize", checkMobile);

    setState((prev) => ({ ...prev, isMounted: true }));

    const timer = setTimeout(() => setState((prev) => ({ ...prev, animateWidth: true })), 100);

    if (!sideBarIsOpen) {
      setState((prev) => ({ ...prev, openSubMenu: null }));
    } else {
      if (state.activeItemId) {
        const activeItem = menuItems.find((i) => i.id === state.activeItemId);
        if (activeItem?.subItems?.length) {
          setState((prev) => ({ ...prev, openSubMenu: state.activeItemId }));
        }
      }
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, [sideBarIsOpen]);

  if (!state.isMounted) return null;

  return (
    <>
      {screenIsMobile && sideBarIsOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setSideBarIsOpen(false)} />
      )}

      <aside
        className={clsx(
          "fixed right-0 top-10 h-[calc(100vh-5rem)] bg-[#EAEAEA] border-l border-gray-200 flex flex-col justify-start overflow-hidden z-50 transition-all duration-500 ease-in-out",
          !screenIsMobile && (state.animateWidth ? (sideBarIsOpen ? "w-55" : "w-15") : "w-0"),
          screenIsMobile &&
            (sideBarIsOpen ? "w-44 translate-x-0 opacity-100" : "w-15 translate-x-full opacity-0"),
        )}
      >
        <SidebarSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <SidebarNav menuItems={filteredMenuItems} state={state} setState={setState} />
        <SidebarSettings
          state={state}
          setState={setState}
          handleItemClick={() => setState((prev) => ({ ...prev, activeItemId: null }))}
        />
      </aside>
    </>
  );
};

export default Sidebar;
