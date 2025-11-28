import AppBox from "@/features/landing/components/appBox/appBox";
// import BannerSlider from "@/features/landing/components/banner/bannerSlider";
import Banner from "@/features/landing/components/banner/banner";
import CircleAdsSlider from "@/features/landing/components/circleAds/circleAdsSlider";
import EntekhabAds from "@/features/landing/components/entekhabAds/entekhabAds";
import GameSelect from "@/features/landing/components/gameSelect/gameSelect";
import RewardsSlider from "@/features/landing/components/rewards/rewardsSlider";
import ShortcutPanel from "@/features/landing/components/shortcutPanel/shortcutPanel";

const LandingPage = () => {
  return (
    <div className="relative">
      <Banner />
      <div className="container mx-auto px-4">
        <RewardsSlider />
        <GameSelect />
        <CircleAdsSlider />
        <div className="flex flex-col sm:flex-row">
          <EntekhabAds
            link="https://www.entekhabeman.com/"
            src="/banner2.jpg"
          />
          <EntekhabAds
            link="https://www.entekhabservice.com/"
            src="/banner1.jpg"
            left={true}
          />
        </div>
        <ShortcutPanel />
        <AppBox />
      </div>
    </div>
  );
};

export default LandingPage;
