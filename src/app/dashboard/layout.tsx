import Header from "@/features/dashboard/layout/Header";
import Footer from "@/features/dashboard/layout/Footer";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default layout;
