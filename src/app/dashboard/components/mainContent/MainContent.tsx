"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useDashboardStore } from "../../store";

const MainContent = () => {
  const { sideBarIsOpen, screenIsMobile } = useDashboardStore();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return (
      <main className="fixed top-10 bottom-10 right-0 w-full bg-white overflow-y-auto p-4 sm:p-6 md:p-8" />
    );
  }
  return (
    <main
      className={clsx(
        "fixed top-10 bottom-10 transition-all duration-500 bg-white overflow-y-auto p-4 sm:p-6 md:p-8",
        sideBarIsOpen && !screenIsMobile ? "right-54 w-[calc(100%-13rem)]" : "",
        !sideBarIsOpen && !screenIsMobile ? "right-14 w-[calc(100%-3rem)]" : "",
      )}
    >
      <div className="bg-gray-50 rounded-2xl shadow-xl border-1 p-4 sm:p-6">
        <h1 className="text-lg font-bold mb-2">صفحه داشبورد</h1>
        <p className="text-gray-500 text-sm ">
          اینجا محتوای اصلی داشبورد قرار می‌گیره. وقتی سایدبار باز و بسته می‌شه، فضای این بخش هم
          به‌صورت خودکار تنظیم می‌شه.
        </p>
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-3xl	">
            <p className="font-thin">بنی آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند(font-thin)</p>
            <p className="font-extralight">
              بنی آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند(font-extralight)
            </p>
            <p className="font-light">
              بنی آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند(font-light)
            </p>
            <p className="font-normal">
              بنی آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند(font-normal)
            </p>
            <p className="font-medium">
              بنی آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند(font-medium)
            </p>
            <p className="font-semibold">
              بنی آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند(font-semibold)
            </p>
            <p className="font-bold">بنی آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند(font-bold)</p>
            <p className="font-extrabold">
              بنی آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند(font-extrabold)
            </p>
            <p className="font-black">
              بنی آدم اعضای یکدیگرند که در آفرینش ز یک گوهرند(font-black)
            </p>
            <br />
          </main>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-white rounded-2xl shadow p-4 h-32"></div>
        <div className="bg-white rounded-2xl shadow p-4 h-32"></div>
        <div className="bg-white rounded-2xl shadow p-4 h-32"></div>
      </div>
    </main>
  );
};

export default MainContent;
