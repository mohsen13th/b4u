"use client";

import { useState, useRef, useEffect } from "react";
import { CircleUser, LogOut, MessageSquare, Settings } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

import clsx from "clsx";

const UserInfo = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    {
      id: 1,
      label: <span className="text-sm">حساب کاربری</span>,
      icon: <Settings size={16} />,
    },
    {
      id: 2,
      label: <span className="text-sm">پیام ها</span>,
      icon: <MessageSquare size={16} />,
    },
    {
      id: 3,
      label: (
        <span
          className="text-sm"
          onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
        >
          خروج
        </span>
      ),
      icon: (
        <LogOut
          onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
          size={16}
        />
      ),
    },
  ];

  return (
    <div
      className="flex items-center pl-3 justify-start gap-2 sm:gap-3 md:gap-5 relative"
      ref={dropdownRef}
    >
      <div
        className="relative bg-gray-100 hover:bg-gray-200 hover:cursor-pointer rounded-full p-[3px] transition-colors duration-200"
        onClick={() => setOpen((prev) => !prev)}
      >
        <CircleUser size={28} color="#99a1af" strokeWidth={1} />

        <span className="absolute top-0 -right-1.5 flex items-center justify-center min-w-[18px] h-4 px-1 text-[10px] font-semibold leading-none text-white bg-red-500 rounded-full shadow-sm">
          3
        </span>
      </div>

      <div
        className={clsx(
          "absolute left-2 top-8 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 z-50",
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none",
          "origin-top-right"
        )}
      >
        <button
          className="flex items-center gap-2 w-full px-4 py-2 text-right text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          onClick={() => {
            setOpen(false);
          }}
        >
          <Settings size={16} />
          <span className="text-sm">حساب کاربری</span>
        </button>
        <button
          className="flex items-center gap-2 w-full px-4 py-2 text-right text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          onClick={() => {
            setOpen(false);
          }}
        >
          <MessageSquare size={16} />
          <span className="text-sm">پیام ها</span>
        </button>
        <button
          className="flex items-center gap-2 w-full px-4 py-2 text-right text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          onClick={() => {
            signOut({ redirect: true, callbackUrl: "/" });
          }}
        >
          <LogOut size={16} />
          <span className="text-sm">خروج</span>
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
