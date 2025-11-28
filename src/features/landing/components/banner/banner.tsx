"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import BannerDesktop from "@/features/landing/components/banner/bannerDesktop";
import BannerMobile from "@/features/landing/components/banner/bannerMobile";
import BannerSkeleton from "@/features/landing/components/banner/bannerSkeleton";
import { getBanners } from "../../services/banners";
import { Banner } from "../../types/banner";

const BannerResponsive = () => {
  const [isMobile, setIsMobile] = useState<boolean>();
  const [slides, setSlides] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    getBanners().then((data) => {
      setSlides(data);
      setLoading(false);
      setReady(false);
    });
  }, []);

  useLayoutEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (loading || isMobile === undefined) return <BannerSkeleton />;

  return (
    <>
      {isMobile === undefined ? null : isMobile ? (
        <BannerMobile />
      ) :  (
        <div className="relative">
      {!ready && (
        <div className="absolute inset-0 z-40">
          <BannerSkeleton />
        </div>
      )}
      <div className={`${ready ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
        <BannerDesktop slides={slides} onReady={() => setReady(true)} />
      </div>
    </div>
      )}
    </>
  );
};

export default BannerResponsive;
