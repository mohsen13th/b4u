"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { LogOut } from 'lucide-react';

const MainHeaderLeft = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-row justify-center px-2 bg-neutral-600 rounded-full w-36 h-10 py-4 text-white text-xs pt-5">
      {!session ? (
        <>
          <div className="w-16 flex justify-center items-center -mt-2">
            <Link href="/login">ورود</Link>
          </div>
          <div className="w-0.5 text-gray-400 flex justify-center items-center -mt-1">
            |
          </div>
          <div className="w-16 flex justify-center items-center -mt-1 mr-1">
            <Link href="/register">ثبت نام</Link>
          </div>
        </>
      ) : (
        <>
          <div className="w-16 flex justify-center items-center -mt-1 mr-1">
            <Link href="/dashboard">پروفایل</Link>
          </div>
          <div className="w-0.5 text-gray-400 flex justify-center items-center -mt-1">
            |
          </div>
          <div className="w-16 flex justify-center items-center -mt-1 cursor-pointer">
            
            <button
              className="cursor-pointer text-red-400"
              onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            >
             <div className="flex flex-row gap-1">
              <LogOut size={18} />
                <p>
                 خروج
             </p>
            </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MainHeaderLeft;
