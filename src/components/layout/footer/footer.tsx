import FooterCenter from "./components/footerCenter"
import FooterBottom from "./components/footerBottom"
import FooterTop from "./components/footerTop"

const MainFooter = ()=>{
    return(
        <div className="flex flex-col w-full sm:px-[55px] px-2.5">
            <FooterTop/>
            <FooterCenter/>
            <FooterBottom/>
        </div>
    )
}

export default MainFooter