import clsx from "clsx";
import { SubItem, SidebarState } from "../Sidebar";
import { useDashboardStore } from "@/app/dashboard/store";

interface Props {
  parentId: number;
  subItems: SubItem[];
  state: SidebarState;
  setState: React.Dispatch<React.SetStateAction<SidebarState>>;
}

const SidebarSubMenu = ({ parentId, subItems, state, setState }: Props) => {
  const { setSideBarIsOpen, screenIsMobile } = useDashboardStore();

  const handleSubItemClick = (subId: number) => {
    setState((prev) => ({
      ...prev,
      activeItemId: parentId,
      activeSubItemId: subId,
      activeSettingButtom: false,
    }));
    if (screenIsMobile) setSideBarIsOpen(false);
  };

  return (
    <div
      className={clsx(
        "flex flex-col overflow-hidden transition-all duration-500 ease-in-out",
        state.openSubMenu === parentId ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
      )}
    >
      {subItems.map((sub) => (
        <button
          key={sub.id}
          onClick={() => handleSubItemClick(sub.id)}
          className={clsx(
            "text-right text-gray-600 hover:text-gray-900 text-sm pr-14 py-1 w-full transition-all duration-500 hover:cursor-pointer",
            state.activeSubItemId === sub.id
              ? "bg-[#DCDCDC] text-gray-900 border-r-4 border-[#0061CB]"
              : "hover:bg-[#CFCFCF]",
          )}
        >
          {sub.label}
        </button>
      ))}
    </div>
  );
};

export default SidebarSubMenu;
