"use client";

import { User, Wallet, MessageSquare, FileText, Users, LogOut } from "lucide-react";

const menuItems = [
  { label: "ویرایش پروفایل", icon: User },
  { label: "کیف پول", icon: Wallet },
  { label: "نظرات", icon: MessageSquare },
  { label: "قوانین و مقررات", icon: FileText },
  { label: "همکاری با ما", icon: Users },
  { label: "خروج", icon: LogOut },
];

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 flex flex-col items-center mt-12">
      <div className="grid grid-cols-2 gap-3 w-full max-w-md mb-5">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-1">
            <User className="w-6 h-6 text-teal-600" />
            <p className="text-sm font-medium text-gray-700">سید محمد مهدی جلالی</p>
            <p className="text-xs text-gray-400">09137738826</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-1">
            <Wallet className="w-6 h-6 text-teal-600" />
            <p className="text-sm font-medium text-gray-700">موجودی کیف پول</p>
            <p className="text-xs text-gray-400">۰ تومان</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex flex-row-reverse items-center justify-end bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all px-4 py-3 text-gray-700 "
          >
            <span className="text-sm font-medium mr-3">{item.label}</span>
            <item.icon className="w-5 h-5 text-teal-600" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
