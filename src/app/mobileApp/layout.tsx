import Header from "./components/header/Header";
import MobileNav from "./components/MobileNavigation/MobileNav";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <MobileNav />
    </>
  );
}

export default layout;
