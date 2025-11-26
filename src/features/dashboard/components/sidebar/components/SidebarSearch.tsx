import { useDashboardStore } from "@/features/dashboard/Store/store";
import { Search } from "lucide-react";
import { useEffect, useRef } from "react";

interface SidebarSearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SidebarSearch = ({ searchTerm, setSearchTerm }: SidebarSearchProps) => {
  const { sideBarIsOpen, setSideBarIsOpen } = useDashboardStore();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (sideBarIsOpen && inputRef.current) inputRef.current.focus();
  }, [sideBarIsOpen]);

  return (
    <div className="mx-3 mt-4">
      <div className="flex items-center gap-2 rounded-lg border border-gray-300 pr-2 pl-1 py-1 focus-within:ring-1 focus-within:ring-gray-400 transition-all duration-500 ease-in-out">
        <button
          onClick={() => !sideBarIsOpen && setSideBarIsOpen(true)}
          className="flex items-center justify-center hover:cursor-pointer"
        >
          <Search
            color="#9E9E9E"
            strokeWidth={2}
            size={20}
            className="shrink-0 transition-all duration-500"
          />
        </button>
        <div
          className={`overflow-hidden bg-gray-50 rounded-md transition-all duration-500 ease-in-out ${sideBarIsOpen ? "opacity-100 w-full" : "opacity-0 w-0"}`}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="جستجو..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-2 text-sm outline-none placeholder-gray-400 transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarSearch;
