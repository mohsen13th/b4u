import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

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
