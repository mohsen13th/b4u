"use client";

import { usePathname } from "next/navigation";
import { ClipboardList, House, Gift } from "lucide-react";
import { useEffect, useState } from "react";

import MobileNav from "@/components/layout/header/components/headerCenter/mobileNav";
import DesktopNav from "@/components/layout/header/components/headerCenter/desktopNav";

const menuItems = [
  { href: "/", icon: House, label: "خانه" },
  { href: "/gifts", icon: Gift, label: "جوایز" },
  { href: "/orders", icon: ClipboardList, label: "سفارشات" },
];

const Navigator = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className={`fixed sm:static bottom-0 w-full sm:w-96 z-50 ${
        isMobile
          ? "backdrop-blur-md bg-gray-50/40 shadow-uplight"
          : "bg-white border-none shadow-none sm:flex sm:justify-center sm:space-x-4 sm:py-4"
      }`}
    >
      <div
        className={`flex ${
          isMobile
            ? "justify-around items-center h-[57px] pt-2"
            : "justify-center items-center gap-4 w-[480px]"
        }`}
      >
        {isMobile === undefined ? null : isMobile ? (
          <MobileNav menuItems={menuItems} pathname={pathname} />
        ) : (
          <DesktopNav menuItems={menuItems} pathname={pathname} />
        )}
      </div>
    </div>
  );
};

export default Navigator;
