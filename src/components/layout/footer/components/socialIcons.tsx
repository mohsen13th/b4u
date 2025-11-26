import Link from "next/link";

const socialIcons = [
  {
    id: 1,
    alt: "instagram",
    src: "/brand-instagram.svg",
    href: "https://www.instagram.com/eforu.ir?utm_source=qr&igsh=cGVvNHNyNm84aGlv",
  },
  {
    id: 2,
    alt: "linkedin",
    src: "/brand-linkedin.svg",
    href: "https://www.linkedin.com/company/eforu-entekhab/",
  },
  {
    id: 3,
    alt: "telegram",
    src: "/brand-telegram.svg",
    href: "https://t.me/EforUsupport",
  },
  {
    id: 4,
    alt: "entekhabGroup",
    src: "/brand-entekhab.svg",
    href: "https://entekhabelectronic.ir/",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex flex-row  gap-5 sm:justify-baseline justify-center mr-auto">
      {socialIcons.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className="h-9 w-9 rounded-full bg-blue-900"
        >
          <div
            className="w-8 h-8 bg-white mx-auto mt-[2.5px]"
            style={{
              mask: `url(${item.src}) no-repeat center`,
              WebkitMask: `url(${item.src}) no-repeat center`,
            }}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
