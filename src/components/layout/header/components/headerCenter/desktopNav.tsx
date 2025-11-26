"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface DesktopMenuProps {
  menuItems: {
    href: string;
    icon: any;
    label: string;
  }[];
  pathname: string;
}

const DesktopNav = ({ menuItems, pathname }: DesktopMenuProps) => {
  return (
    <>
      {menuItems.map(({ href, icon: Icon, label }) => {
        const active = pathname === href;

        return (
          <Link key={href} href={href} className="relative flex-1 flex flex-col sm:flex-row items-center sm:h-10">
            {active && (
              <motion.div
                layoutId="activeDesktop"
                className="absolute inset-0 rounded-lg bg-[#033884]"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}

            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:justify-normal sm:px-3 justify-center h-full w-full py-3">
              <Icon size={22} className={`${active ? "text-white" : "text-[#033884]"}`} />
              <span className={`mt-1 text-sm sm:mr-1 font-medium ${active ? "text-white" : "text-[#033884] "}`}>
                {label}
              </span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default DesktopNav;
