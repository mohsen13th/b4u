import clsx from "clsx";
import { Settings } from "lucide-react";
import { SidebarState } from "../Sidebar";
import { useDashboardStore } from "@/app/dashboard/store";

interface Props {
  state: SidebarState;
  setState: React.Dispatch<React.SetStateAction<SidebarState>>;
  handleItemClick: () => void;
}

const SidebarSettings = ({ state, setState, handleItemClick }: Props) => {
  const { sideBarIsOpen } = useDashboardStore();
  const handleSettingClick = () => {
    handleItemClick();
    setState((prev) => ({
      ...prev,
      activeSettingButtom: !prev.activeSettingButtom,
    }));
  };

  return (
    <div className="mb-3 absolute bottom-0 w-full">
      <button
        onClick={handleSettingClick}
        className={clsx(
          "active:bg-[#D0D0D0] active:text-gray-900 flex w-[calc(100%-1rem)] items-center justify-center gap-3 py-2 px-3 transition-all duration-500 text-gray-600 hover:bg-[#CFCFCF] hover:text-gray-900",
          sideBarIsOpen ? "rounded-none w-full" : "rounded-lg mx-2 justify-center",
          state.activeSettingButtom ? "bg-[#D0D0D0] text-gray-900" : "",
        )}
      >
        <Settings size={20} />
        {sideBarIsOpen && (
          <span className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">تنظیمات</span>
        )}
      </button>
    </div>
  );
};

export default SidebarSettings;
