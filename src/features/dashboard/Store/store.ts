import { create } from "zustand";

interface DashboardStore {
  sideBarIsOpen: boolean;
  screenIsMobile: boolean;

  setScreenIsMobile: (isMobile: boolean) => void;
  setSideBarIsOpen: (isOpen: boolean) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  sideBarIsOpen: false,
  screenIsMobile: false,
  setScreenIsMobile: (isMobile) => set({ screenIsMobile: isMobile }),
  setSideBarIsOpen: (isOpen) => set({ sideBarIsOpen: isOpen }),
}));
