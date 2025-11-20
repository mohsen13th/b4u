"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ClipboardList, Grid, Bike, User, Settings, Shapes, LayoutGrid } from "lucide-react";

const menuItems = [
  { href: "/mobileApp/settings", icon: Settings, label: "تنظیمات" },
  { href: "/mobileApp/orders", icon: ClipboardList, label: "سفارش‌ها" },
  { href: "/mobileApp/categories", icon: LayoutGrid, label: "دسته‌ها" },
  { href: "/mobileApp/map", icon: Bike, label: "سفرها" },
  { href: "/mobileApp/profile", icon: User, label: "پروفایل" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 bg-gray-100 border-t border-gray-200 shadow-md z-50 w-[375px]">
      <div className="flex justify-around items-center h-[57px] pt-2">
        {menuItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} className="relative flex flex-col items-center">
              {active && (
                <motion.div
                  layoutId="activeIcon"
                  className="absolute -top-[14px] bg-gray-100 rounded-full  border-gray-200 border-t-2"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <div className="bg-teal-500 rounded-full p-5 border-gray-100 border-3"></div>
                </motion.div>
              )}
              <motion.div
                animate={{ scale: active ? 1.4 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`z-10 ${active ? "text-white" : "text-gray-500"}`}
              >
                <Icon size={22} />
              </motion.div>
              <span
                className={`text-xs mt-[10px] pb-2 ${active ? "text-teal-600 font-medium" : "text-gray-500"}`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
