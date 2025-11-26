"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { useEffect, useState } from "react";
import { getBanners } from "../../services/banners";
import { Banner } from "../../types/banner";

import Link from "next/link";
import Image from "next/image";
import BannerSkeleton from "./bannerSkeleton";

const BannerSlider = () => {
  const [slides, setSlides] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBanners().then((data) => {
      setSlides(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <BannerSkeleton/>;

  return (
    <div className="w-screen sm:w-[calc(100vw-15px)] aspect-[5/2.3] sm:aspect-5/1 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        speed={600}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.siteBannerId} className="aspect-[5/2.3] sm:aspect-5/1 relative">
            {/* <BannerItem slide={slide} /> */}
            <div className="relative">
              <Link href={slide.link} className="relative w-full h-full">
                <SwiperSlide className="relative aspect-[5/2.3] sm:aspect-5/1">
                  <Image
                    fill
                    src={slide.imageUrl}
                    alt={slide.description}
                    className=""
                    sizes="100vw"
                  />
              </SwiperSlide>
              {/* <img src={slide.imageUrl} alt={slide.description} className="object-cover w-full h-full"/> */}
            </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSlider