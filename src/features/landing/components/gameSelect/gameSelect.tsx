import Image from "next/image";
import Link from "next/link";

const GameSelect = () => {
  return (
    <div className="relative w-full sm:h-60 h-30 rounded-lg mt-6">
      <Link href="https://www.eforu.ir/gameSelect">
        <Image
        src="/lotteryImage.webp"
        alt="بازی کن، کلی جایزه ببر"
        fill 
        className="w-100 h-auto rounded-lg object-cover"
      />
      </Link>
    </div>
  );
}

export default GameSelect