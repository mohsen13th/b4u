import type { Metadata } from "next";

import localFont from "next/font/local";

import "./globals.css";
import LayoutTanstackProvider from "@/components/layoutTanstackProvider/layoutTanstackProvider";
const iranSansX = localFont({
  src: [
    {
      path: "../assets/fonts/IRANSansX-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANSansX-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iransansx",
  display: "swap",
});

export const metadata: Metadata = {
  title: "B4U",
  description: "وب اپلیکیشن B4U",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className={iranSansX.variable}>
      <body className={`font-iransans ${iranSansX.variable} antialiased`}>
        <LayoutTanstackProvider>{children}</LayoutTanstackProvider>
      </body>
    </html>
  );
}
