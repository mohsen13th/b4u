"use client";

import { useState } from "react";
import { toast } from "sonner";
import FancyToggle from "@/components/bases/ToggleButton/ToggleButton";
import { Bell } from "lucide-react";

const ToggleTest = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsActive(checked);

    if (checked) {
      toast.success("ویژگی فعال شد ✅", {
        description: "الان دیگه روشنه و آماده به کاره!",
        style: { background: "#e6ffed", color: "#065f46" },
      });
    } else {
      toast.warning("ویژگی غیرفعال شد ⚠️", {
        description: "حواست باشه، الان خاموشه!",
        style: { background: "#fff4e6", color: "#9a5800" },
      });
    }
  };

  return (
    <div className="p-6 flex flex-col items-start gap-4">
      <div className="flex flex-row">
        <Bell size={18} className="text-gray-700 mt-0.5" />
        <p className="text-right pr-1 mb-1">فعال سازی اعلان های سامانه</p>
      </div>

      <FancyToggle checked={isActive} label="فعال‌سازی ویژگی" onChange={handleToggle} />
    </div>
  );
};

export default ToggleTest;
