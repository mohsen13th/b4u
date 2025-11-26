

import MainHeader from "@/components/layout/header/header";
import MainFooter from "@/components/layout/footer/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <MainHeader/>
        {children}
        <MainFooter/>
    </>
  );
}
