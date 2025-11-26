"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface MobileMenuProps {
  menuItems: {
    href: string;
    icon: any;
    label: string;
  }[];
  pathname: string;
}

const MobileNav = ({ menuItems, pathname }: MobileMenuProps) => {
  return (
    <>
      {menuItems.map(({ href, icon: Icon, label }) => {
        const active = pathname === href;

        return (
          <Link key={href} href={href} className="relative flex flex-col items-center mt-1 mb-1">
            <motion.div
              animate={{ scale: active ? 1.4 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`z-10 ${active ? "text-[#033884]" : "text-gray-500"}`}
            >
              <Icon size={22} />
            </motion.div>

            <span className={`text-xs mt-1.5 pb-2 ${active ? "text-[#033884] font-normal" : "text-gray-500"}`}>
              {label}
            </span>
          </Link>
        );
      })}
    </>
  );
};

export default MobileNav;
