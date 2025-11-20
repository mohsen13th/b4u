"use client";

import { useEffect } from "react";
import { toast } from "sonner";

const RegisterSW = (): null => {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      toast.error("⚠️ Service Worker is not supported in this browser.");
      return;
    }

    const registerSW = async (): Promise<void> => {
      try {
        // بررسی کن اگه از قبل فعاله، دوباره ثبت نکن
        if (navigator.serviceWorker.controller) {
          toast.info("ℹ️ Service Worker already active");
          return;
        }

        const registration = await navigator.serviceWorker.register("/service-worker.js");

        if (registration.active) {
          toast.success("✅ Service Worker is active!");
        } else if (registration.waiting) {
          toast.info("⏳ Service Worker waiting...");
        } else if (registration.installing) {
          toast.info("🌀 Installing Service Worker...");
        } else {
          toast.success("✅ Service Worker registered successfully!");
        }
      } catch (err) {
        if (err instanceof Error) {
          toast.error(`❌ Service Worker registration failed: ${err.message}`);
        } else {
          toast.error("❌ Service Worker registration failed: Unknown error");
        }
      }
    };

    window.addEventListener("load", registerSW);
    return () => window.removeEventListener("load", registerSW);
  }, []);

  return null;
};

export default RegisterSW;
