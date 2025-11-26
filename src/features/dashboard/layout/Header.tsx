import HeaderRight from "@/features/dashboard/layout/header/HeaderRight";
import UserInfo from "@/features/dashboard/layout/header/UserInfo";
import HeaderCenter from "@/features/dashboard/layout/header/HeaderCenter";

function Header() {
  return (
    <header className="relative  flex justify-between items-center border-b border-gray-200 bg-white w-full h-10 z-999">
      <HeaderRight />

      <HeaderCenter />

      <UserInfo />
    </header>
  );
}

export default Header;
