"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { circleAds } from "@/features/landing/config/CircleAds";

const CircleAdsSlider = () => {
  return (
    <div className="relative w-[calc(100vw-35px)] sm:w-full h-[170px] sm:h-[170px] overflow-y-hidden py-2 px-6">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-left",
          prevEl: ".custom-right",
        }}
        className="mt-6"
        slidesPerView={10}
        spaceBetween={3}
        grabCursor
        loop={true}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 3 },
          640: { slidesPerView: 4, spaceBetween: 3 },
          1024: { slidesPerView: 10, spaceBetween: 3 },
        }}
      >
        {circleAds.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-36 pt-1">
              <a
              href={item.link}
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src={item.image}
                alt="reward"
                className="w-24 h-24 rounded-full border-2 border-amber-500 p-1 object-contain shadow-sm hover:scale-105 transition "
              />
            </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-right absolute top-1/2 right-0 sm:right-2 transform -translate-y-1/2 cursor-pointer  bg-sky-700 rounded-full hover:bg-sky-500 z-10 border-[3px] border-sky-700">
        <ChevronRight size={20} color="#fff" className="border-2 rounded-full p-0.5 w-6.5 h-6.5" />
      </div>
      <div className="custom-left absolute top-1/2 left-0 sm:left-2 transform -translate-y-1/2 cursor-pointer  bg-sky-700 rounded-full hover:bg-sky-500 z-10 border-[3px] border-sky-700">
        <ChevronLeft size={20} color="#fff" className="border-2 rounded-full p-0.5 w-6.5 h-6.5" />
      </div>
    </div>
  );
};

export default CircleAdsSlider;
