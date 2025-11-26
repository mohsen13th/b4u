"use client"

import Link from "next/link";
import Image from "next/image"
import { Banner } from "../../types/banner";

const BannerItem = ({ slide }: { slide: Banner }) => {
  console.log(slide)
  return (
    <Link href={slide.link} className="relative w-full h-full">
      <Image
        className="object-cover"
        width="10"
        height="10"
        src={slide.imageUrl}
        alt={slide.description}
        priority
      />
    </Link>
  );
}

export default BannerItem