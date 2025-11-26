import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { MenuItem, SidebarState } from "@/features/dashboard/components/sidebar/Sidebar";
import SidebarSubMenu from "@/features/dashboard/components/sidebar/components/SidebarSubMenu";
import { useDashboardStore } from "@/features/dashboard/Store/store";

interface Props {
  item: MenuItem;
  state: SidebarState;
  setState: React.Dispatch<React.SetStateAction<SidebarState>>;
}

const SidebarItem = ({ item, state, setState }: Props) => {
  const { sideBarIsOpen, setSideBarIsOpen, screenIsMobile } = useDashboardStore();

  const handleItemClick = (id: number | null, hasSubItems?: boolean) => {
    setState((prev) => ({ ...prev, activeSettingButtom: false }));

    if (!sideBarIsOpen && item && Array.isArray(item.subItems) && item.subItems.length > 0) {
      const firstSubId = item.subItems[0].id;

      setState((prev) => ({
        ...prev,
        activeItemId: id,
        activeSubItemId: firstSubId,
      }));

      if (screenIsMobile) setSideBarIsOpen(false);
      return;
    }

    if (hasSubItems) {
      setState((prev) => ({
        ...prev,
        openSubMenu: state.openSubMenu === id ? null : id,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        activeItemId: id,
        activeSubItemId: null,
      }));
      if (screenIsMobile) setSideBarIsOpen(false);
    }
  };

  const isParentActive =
    state.activeItemId === item.id ||
    (item.subItems && item.subItems.some((sub) => sub.id === state.activeSubItemId));

  return (
    <div className="w-full">
      <button
        onClick={() => handleItemClick(item.id, !!item.subItems)}
        className={clsx(
          "flex items-center justify-between py-2 rounded-lg px-3 text-right w-[calc(100%-1rem)] transition-all duration-500 hover:cursor-pointer",
          sideBarIsOpen ? "rounded-none w-full" : "rounded-lg mx-2",
          isParentActive ? "bg-[#D0D0D0] text-gray-900" : "text-gray-500 hover:bg-gray-100",
        )}
      >
        <div className="flex items-center gap-3">
          <span>{item.icon}</span>
          {sideBarIsOpen && (
            <span className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              {item.label}
            </span>
          )}
        </div>
        {item.subItems && sideBarIsOpen && (
          <ChevronDown
            size={16}
            className={clsx(
              "transition-transform duration-500",
              state.openSubMenu === item.id ? "rotate-180" : "rotate-0",
            )}
          />
        )}
      </button>

      {item.subItems && (
        <SidebarSubMenu
          parentId={item.id}
          subItems={item.subItems}
          state={state}
          setState={setState}
        />
      )}
    </div>
  );
};

export default SidebarItem;
