"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { WalletIcon, Coins, SmileIcon, CirclePercent } from "lucide-react";

import { useDashboardStore } from "@/features/dashboard/Store/store";
import DashboardCombobox from "../comboBox/comboBox";
import PieChart from "../charts/pieChart";
import BarChart from "../charts/barChart";
import ColoredInfoCard from "../ColoredInfoCard/ColoredInfoCard";

import { selection } from "../../data/comboYselection";
import { pieData } from "../../data/pieData";
import { barData } from "../../data/barData";
import DashboardTable from "../dashboardTable/dashboardTable";

const MainContent = () => {
  const { sideBarIsOpen, screenIsMobile } = useDashboardStore();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return <main className="w-full bg-white p-4 sm:p-6 md:p-8"></main>;
  }
  return (
    <div className="w-full flex flex-row font-iransans">
      <div
        className={clsx(
          "transition-all duration-500",
          sideBarIsOpen && !screenIsMobile ? "sm:w-[250]" : "",
          !sideBarIsOpen && !screenIsMobile ? "sm:w-[52]" : ""
        )}
      ></div>
      <main className="w-full bg-white p-4 sm:px-8 sm:py-1">
        <div className="w-full flex sm:flex-row flex-col transition-all duration-500 sm:my-4">
          <div className="sm:my-0 my-4 sm:w-9/12 w-full h-9 rounded-full space-x-4 bg-gray-50 border px-3 sm:px-3 border-gray-200 mb-4">
            <h1 className="text-sm font-bold mb-2 mt-2">پیشخوان</h1>
          </div>
          <div className="mr-auto sm:my-0 my-4">
            <DashboardCombobox combo={selection} />
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl shadow-insetupdown border p-4 sm:p-6 max-h-[70vh] overflow-y-auto ">
          <div className="flex sm:flex-row flex-col">
            <div className="flex flex-col gap-4">
              <ColoredInfoCard
                title="کیف پول"
                value="5,000"
                bgColor="bg-orange-200"
                iconColor="text-orange-700"
                icon={<WalletIcon />}
              />
              <ColoredInfoCard
                title="سکه"
                value={120}
                bgColor=" bg-purple-200"
                iconColor=" text-purple-700"
                icon={<Coins />}
              />
              <ColoredInfoCard
                title="رضایت مشتری"
                value="95%"
                bgColor="bg-emerald-200"
                iconColor="text-emerald-700"
                icon={<SmileIcon />}
              />
              <ColoredInfoCard
                title="وفاداری مشتری"
                value="80%"
                bgColor="bg-teal-200"
                iconColor="text-teal-700"
                icon={<CirclePercent />}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex sm:flex-row flex-col">
                <div className="flex flex-col sm:w-5/12 w-full p-4">
                  <p className="font-normal text-xs mb-2 text-nowrap">
                    وضعیت ماهانه استفاده از کد های تخفیف :
                  </p>
                  <div className="border-t w-full border-solid border-gray-300 my-1.5" />
                  <PieChart data={pieData} />
                </div>
                <div className="flex flex-col sm:w-140 w-85 p-4 mr-auto">
                  <p className="font-normal text-xs mb-2 text-nowrap">
                    فروش هفتگی تخفیف ها :
                  </p>
                  <div className="border-t w-full border-solid border-gray-300 my-1.5" />
                  <BarChart data={barData} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <DashboardTable />
          </div>
        </div>
        {/* 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-2xl shadow p-4 h-32"></div>
          <div className="bg-white rounded-2xl shadow p-4 h-32"></div>
          <div className="bg-white rounded-2xl shadow p-4 h-32"></div>
        </div> */}
      </main>
    </div>
  );
};

export default MainContent;
