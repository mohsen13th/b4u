import {
  Vote,
  MessageSquareShare,
  MessageCircleHeart,
  Gift,
} from "lucide-react";
import Link from "next/link";

const items = [
  { title: "نظرسنجی", icon: <Vote className="w-10 h-10" />, href: "/survey" },
  {
    title: "معرفی به دوستان",
    icon: <MessageSquareShare className="w-10 h-10" />,
    href: "/referal",
  },
  {
    title: "نظرات و پیشنهادات",
    icon: <MessageCircleHeart className="w-10 h-10" />,
    href: "comment",
  },
  { title: "هدایای من", icon: <Gift className="w-10 h-10" />, href: "gifts" },
];

const ShortcutPanel = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between mt-6 font-iransans">
      {items &&
        items.map((item) => (
          <Link
            key={item.title}
            href={item.href ?? "#"}
            className="flex sm:mb-0 mb-4  items-center justify-between sm:w-64 w-full h-25 bg-linear-to-b from-fuchsia-950 via-fuchsia-800 to-fuchsia-400 text-white rounded-xl px-4 py-3 shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <span className="text-base font-medium">{item.title}</span>
            <span>{item.icon}</span>
          </Link>
        ))}
    </div>
  );
};

export default ShortcutPanel;
