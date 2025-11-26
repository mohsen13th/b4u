import Image from "next/image";
import Link from "next/link";
export interface entekhabAds {
    link:string,
    src:string
    left?:boolean
}
const EntekhabAds = ({link,src,left}:entekhabAds) => {
    console.log(link)
    console.log(src)
  return (
    <div className={`w-full sm:w-[47%] aspect-[2/0.94] object-cover mb-6 sm:mb-0  relative ${left? "mr-auto": ""}`}>
      <Link href={link}>
        <Image
        src={src}
        alt="بازی کن، کلی جایزه ببر"
        fill 
        className="rounded-lg"
      />
      </Link>
    </div>
  );
}

export default EntekhabAds