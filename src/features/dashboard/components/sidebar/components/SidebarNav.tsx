import clsx from "clsx";
import { MenuItem, SidebarState } from "@/features/dashboard/components/sidebar/Sidebar";
import SidebarItem from "@/features/dashboard/components/sidebar/components/SidebarItem";
import { useDashboardStore } from "@/features/dashboard/Store/store";

interface Props {
  menuItems: MenuItem[];
  state: SidebarState;
  setState: React.Dispatch<React.SetStateAction<SidebarState>>;
}

const SidebarNav = ({ menuItems, state, setState }: Props) => {
  const { sideBarIsOpen } = useDashboardStore();
  return (
    <nav
      className={clsx(
        "flex flex-col mt-2 w-full transition-all duration-500",
        sideBarIsOpen ? "" : "overflow-hidden",
      )}
    >
      {menuItems.length === 0 ? (
        <p className="text-center text-gray-500 text-sm mt-4">نتیجه‌ای یافت نشد</p>
      ) : (
        menuItems.map((item) => (
          <SidebarItem key={item.id} item={item} state={state} setState={setState} />
        ))
      )}
    </nav>
  );
};

export default SidebarNav;
