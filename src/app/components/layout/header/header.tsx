import MainHeaderCenter from "./components/headerCenter";
import MainHeaderLeft from "./components/headerLeft";
import MainHeaderRight from "./components/headerRight";

const MainHeader = ()=>{
    return (
    <header className="relative  flex justify-between items-center border-b border-gray-200 bg-white w-full h-10 z-[999]">
      <MainHeaderRight />

      <MainHeaderCenter />

      <MainHeaderLeft />

    </header>
  );
}

export default MainHeader