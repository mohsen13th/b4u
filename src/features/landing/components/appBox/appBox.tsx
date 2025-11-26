import Link from "next/link";
import Image from "next/image";

const AppBox = () => {
  return (
    <div className="w-full flex sm:flex-row flex-col rounded-2xl sm:h-25 h-72 mt-10 mb-7 bg-linear-to-b from-gray-400 to-gray-200 p-4">
      <div className="flex flex-row">
        <div>
          <Image
            src="/eforulogo.svg"
            alt="انتخاب برای شما"
            width={80}
            height={80}
            className="sm:h-18 h-22 sm:w-18 w-22 flex"
          />
        </div>
        <div className="flex flex-col pr-2 sm:text-sky-950 text-sky-800">
          <p className="font-extrabold text-xl xl:mb-4 sm:pt-1 pt-5">
            تنها یک کلیک با دنیایی از تخفیف‌ها فاصله داری
          </p>
          <p className="text-base">
            با نصب اپلیکیشن باشگاه مشتریان انتخاب هرجایی که باشید می‌توانید از
            تخفیف‌های شگفت انگیز استفاده کنید.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center pt-5 sm:pt-0 sm:gap-10 sm:mr-auto">
        <Link href="#">
          <Image
            src="/bazarIcon.svg"
            alt="انتخاب برای شما"
            width={80}
            height={80}
            className="sm:h-25 h-10 sm:w-36 w-50 flex"
          />
        </Link>
        <Link href="#">
          <Image
            src="/sibcheIcon.svg"
            alt="انتخاب برای شما"
            width={80}
            height={80}
            className="sm:h-25 h-10 sm:w-36 w-50 flex"
          />
        </Link>
      </div>
    </div>
  );
};

export default AppBox;
