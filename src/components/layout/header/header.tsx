import Navigator from "@/components/layout/header/components/headerCenter/navigator";
import MainHeaderLeft from "./components/headerLeft";
import MainHeaderRight from "./components/headerRight";

const MainHeader = ()=>{
    return (
    <header className="relative flex flex-row justify-around items-center border-b border-gray-200 bg-white w-full h-20 z-999">
      <MainHeaderRight />

      <Navigator />

      <MainHeaderLeft />

    </header>
  );
}

export default MainHeader