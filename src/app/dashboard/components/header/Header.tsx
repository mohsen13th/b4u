import HeaderRight from "./components/HeaderRight";
import HeaderLeft from "./components/HeaderLeft";
import HeaderCenter from "./components/HeaderCenter";

function Header() {
  return (
    <header className="relative  flex justify-between items-center border-b border-gray-200 bg-white w-full h-10 z-[999]">
      <HeaderRight />

      <HeaderCenter />

      <HeaderLeft />
    </header>
  );
}

export default Header;
