"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import RewardModal from "./RewardModal/RewardModal";
import RewardsSkeleton from "./rewardsSkeleton";

import { getRewards } from "../../services/rewards";

import { RewardItem } from "@/features/landing/types/reward";

const RewardsSlider = () => {
  const [selected, setSelected] = useState<RewardItem | null>(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<RewardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const handleOpen = (item: RewardItem) => {
    setSelected(item);
    setOpen(true);
  };

  useEffect(() => {
    getRewards().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <RewardsSkeleton />;

  return (
    <div className="mx-auto rounded-2xl p-4 w-[calc(100vw-35px)] sm:w-full h-[400px] sm:h-[400px] overflow-hidden bg-gray-500 mt-10">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          768: { slidesPerView: 3 },
          900: { slidesPerView: 3 },
          1000: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
        className="w-full mt-8.5"
        style={{
          "--swiper-navigation-color": "#00598a",
          "--swiper-navigation-size": "20px",
        }as React.CSSProperties}
      >
        {items.length > 0 &&
          items.map((item) => (
            <SwiperSlide key={item.rewardPointId}>
              <Card
                className="w-56 h-72 rounded-b-lg border border-sky-700 bg-[#F7EBCB] cursor-pointer hover:shadow-md transition "
                onClick={() => handleOpen(item)}
              >
                <CardContent className="flex flex-col items-center justify-center px-4 font-iransans text-right font-bold text-xs tracking-tight sm:text-sky-900 text-sky-800 ">
                  <Image
                    src={item.urlImage}
                    width={200}
                    height={200}
                    alt={item.rewardName}
                    className="fixed-size-img mb-4 rounded-sm"
                  />
                  <p className="w-full tracking-tight line-clamp-1">
                    {item.rewardName}
                  </p>
                  <div className="border-t w-full border-dashed border-gray-400 my-2" />
                  <p className="w-full">تا سقف 500 </p>
                  <div className="border-t w-full border-dashed border-gray-400 my-2" />
                  <div className="flex flex-row w-full">
                    <div className="flex">
                      <Image
                        src="/coin.svg"
                        width={20}
                        height={20}
                        alt="coin"
                      />
                      <p className="text-2xl mt-1 mr-1">{item.points}</p>
                    </div>
                    <div className="flex mr-auto mt-4 text-xs font-normal">
                      <p className="ml-0.5">انقضا:</p>
                      <p className="font-iransans">
                        {item.persianDeadlineDate}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>
          
      <RewardModal open={open} onClose={() => setOpen(false)} item={selected} />
    </div>
  );
};

export default RewardsSlider;
