"use client";

import { Toaster } from "sonner";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { SessionProvider } from "next-auth/react";
interface ILayoutProps {
  children: React.ReactNode;
}

const LayoutTanstackProvider = ({ children }: ILayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster position="top-right" richColors />
          {children}
        </QueryClientProvider>
      </SessionProvider>
    </div>
  );
};

export default LayoutTanstackProvider;
