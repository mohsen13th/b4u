"use client";

import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import icon from "./icon/logo.jpg";

export default function Header() {
  return (
    <header className="fixed top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-40 w-[375px]">
      <div className=" mx-auto h-[60px] flex items-center justify-between px-4">
        <div className="w-10 h-10" />

        <div className="flex items-center justify-center">
          <Image
            src={icon}
            alt="Logo"
            width={160}
            height={80}
            className="h-15 w-auto object-contain"
          />
        </div>

        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition">
          <ShoppingBag className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
}
