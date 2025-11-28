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

const bannerItem = [
  { siteBannerId:1,link: "#", imageUrl: "/1.mobile.8d1d338d.jpg", description: "بنر سایت" },
  { siteBannerId:1,link: "#", imageUrl: "/2-mobile.7611ff7a.jpg", description: "بنر سایت" },
  { siteBannerId:1,link: "#", imageUrl: "/3-mobile.8e2e454e.jpg", description: "بنر سایت" },
  { siteBannerId:1,link: "#", imageUrl: "/6-mobile.68529dbc.jpg", description: "بنر سایت" },
  { siteBannerId:1,link: "https://www.eforu.ir/festival", imageUrl: "/7-mobile.cf106243.jpg", description: "بنر سایت" },
  { siteBannerId:1,link: "#", imageUrl: "/8-mobile.8b1631e3.jpg", description: "بنر سایت" },
  { siteBannerId:1,link: "https://basalam.com/", imageUrl: "/baSalamMobile.c31012f8.jpg", description: "بنر سایت" },
  { siteBannerId:1,link: "#", imageUrl: "/dall-mobile.79013e7a.jpg", description: "بنر سایت" },
  { siteBannerId:1,link: "#", imageUrl: "/lottery-autumn-mobile.2ef7a248.jpg", description: "بنر سایت" },
  { siteBannerId:1,link: "#", imageUrl: "/slidermobile.6cd81fae.jpg", description: "بنر سایت" },
];

const BannerMobile = () => {

  return (
    <div className="w-screen aspect-4/3 sm:aspect-5/1 overflow-hidden">
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
        {bannerItem.map((slide) => (
          <SwiperSlide key={slide.siteBannerId} className="aspect-4/3 sm:aspect-5/1 relative">
            {/* <BannerItem slide={slide} /> */}
            <div className="relative">
              <Link href={slide.link} className="relative w-full h-full">
                <SwiperSlide className="relative aspect-4/3 sm:aspect-5/1">
                  <Image
                    fill
                    src={slide.imageUrl}
                    alt={slide.description}
                    className=""
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

export default BannerMobile