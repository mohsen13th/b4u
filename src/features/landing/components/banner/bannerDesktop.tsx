"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import Link from "next/link";
import Image from "next/image";


const BannerDesktop = ({slides, onReady}:any) => {

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
        onInit={onReady}
      >
        {slides && slides.map((slide:any) => (
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

export default BannerDesktop