"use client";

import RightFooter from "./components/RightFooter";
import CenterFooter from "./components/CenterFooter";
import LeftFooter from "./components/LeftFooter";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 right-0 w-full h-10 border-t border-gray-200 bg-gray-900 flex items-center justify-between px-3 sm:px-6 md:px-20 text-xs sm:text-sm text-gray-500">
      <RightFooter />

      <CenterFooter />

      <LeftFooter />
    </footer>
  );
};

export default Footer;
