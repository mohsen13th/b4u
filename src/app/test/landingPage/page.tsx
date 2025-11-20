"use client";

import React, { JSX, useState } from "react";
import clsx from "clsx";

export default function LandingPage(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 antialiased">
      <header className="w-full border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
                LOGO
              </div>
              <span className="hidden sm:inline-block font-semibold text-lg">نام برند شما</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-sm font-medium hover:text-indigo-600 transition">
                خانه
              </a>
              <a href="#work" className="text-sm font-medium hover:text-indigo-600 transition">
                نمونه کارها
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-indigo-600 transition">
                تماس با ما
              </a>
              <a href="#about" className="text-sm font-medium hover:text-indigo-600 transition">
                ارتباط با ما
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700 transition"
              >
                درخواست مشاوره
              </a>

              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100"
                aria-label="menu"
                onClick={() => setMobileOpen((s) => !s)}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            "md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-96" : "max-h-0",
          )}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#home" className="block py-2 px-2 rounded-md hover:bg-gray-50">
              خانه
            </a>
            <a href="#work" className="block py-2 px-2 rounded-md hover:bg-gray-50">
              نمونه کارها
            </a>
            <a href="#contact" className="block py-2 px-2 rounded-md hover:bg-gray-50">
              تماس با ما
            </a>
            <a href="#about" className="block py-2 px-2 rounded-md hover:bg-gray-50">
              ارتباط با ما
            </a>
            <a
              href="#contact"
              className="block mt-2 w-full text-center px-4 py-2 rounded-md bg-indigo-600 text-white"
            >
              درخواست مشاوره
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
                  طراحی و توسعه وب‌اپلیکیشن مدرن با <span className=" text-indigo-600">React</span>{" "}
                  و <span className="text-pink-600">Next.js</span>
                </h1>

                <p className="mt-4 text-gray-600 max-w-2xl text-base sm:text-lg">
                  ما اپ‌های سریع، مقیاس‌پذیر و قابل نگهداری می‌سازیم — از طراحی رابط کاربری زیبا تا
                  معماری بک‌اند. با تیم ما، محصول شما در سریع‌ترین زمان ممکن به دست کاربران خواهد
                  رسید.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
                  >
                    شروع همکاری
                  </a>
                  <a
                    href="#work"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition"
                  >
                    نمونه کارها
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">
                      R
                    </div>
                    <div>
                      <div className="font-semibold">React</div>
                      <div className="text-xs text-gray-500">UI library</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-pink-50 flex items-center justify-center text-pink-600 font-semibold">
                      N
                    </div>
                    <div>
                      <div className="font-semibold">Next.js</div>
                      <div className="text-xs text-gray-500">SSR &amp; SSG</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-green-50 flex items-center justify-center text-green-600 font-semibold">
                      T
                    </div>
                    <div>
                      <div className="font-semibold">TypeScript</div>
                      <div className="text-xs text-gray-500">Static types</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-pink-100 p-6 shadow-2xl">
                    <div className="rounded-lg bg-white p-4 shadow-inner">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-400">پروژه نمونه</div>
                          <div className="text-sm font-medium">پلتفرم فروش آنلاین</div>
                        </div>
                        <div className="text-xs text-gray-500">v1.2</div>
                      </div>

                      <div className="mt-4 h-48 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 flex items-center justify-center text-gray-300">
                        <svg
                          width="120"
                          height="80"
                          viewBox="0 0 120 80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="116"
                            height="76"
                            rx="10"
                            stroke="#E5E7EB"
                            strokeWidth="2"
                          />
                          <path d="M12 24h96" stroke="#E5E7EB" strokeWidth="2" />
                          <path d="M12 44h50" stroke="#E5E7EB" strokeWidth="2" />
                        </svg>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm text-gray-600">React + Next.js</div>
                        <a href="#work" className="text-sm text-indigo-600 font-medium">
                          مشاهده
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -left-6 -top-6 w-28 h-28 bg-indigo-100 rounded-full blur-xl opacity-40" />
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-pink-100 rounded-full blur-xl opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="font-semibold">تجربه کاربری عالی</h3>
                <p className="mt-2 text-sm text-gray-500">
                  طراحی واکنش‌گرا و کاربرپسند برای هر دستگاه
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="font-semibold">عملکرد بالا</h3>
                <p className="mt-2 text-sm text-gray-500">بهینه‌سازی سرعت و SEO با Next.js</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="font-semibold">معماری امن</h3>
                <p className="mt-2 text-sm text-gray-500">
                  بهترین شیوه‌ها برای امنیت و مقیاس‌پذیری
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold">آماده‌اید پروژه‌تان را شروع کنیم؟</h2>
            <p className="mt-3 text-gray-600">
              برای یک جلسه مشاوره رایگان ثبت‌نام کنید و ایده‌تان را با ما به اشتراک بگذارید.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <a
                href="#contact"
                className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium"
              >
                درخواست جلسه
              </a>
              <a href="#work" className="px-6 py-3 rounded-md border border-gray-200">
                نمونه کارها
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  LOGO
                </div>
                <div>
                  <div className="font-semibold">نام برند شما</div>
                  <div className="text-sm text-gray-400">خدمات توسعه وب و طراحی UI</div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                {/* Telegram */}
                <a
                  href="#"
                  aria-label="telegram"
                  className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M22 2L11 13"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="#"
                  aria-label="whatsapp"
                  className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M21 11.5A9.5 9.5 0 1 1 11.5 2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 14l-2-1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="instagram"
                  className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.5" />
                    <path
                      d="M16 11.37A4 4 0 1 1 12.63 8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold">لینک‌ها</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#home" className="hover:text-white">
                      خانه
                    </a>
                  </li>
                  <li>
                    <a href="#work" className="hover:text-white">
                      نمونه کارها
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-white">
                      ارتباط با ما
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white">
                      تماس با ما
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">خدمات</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      توسعه وب
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      UI/UX
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      مشاوره
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">پشتیبانی</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      راهنما
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-semibold">خبرنامه</h4>
              <p className="text-sm text-gray-400 mt-2">
                برای دریافت اخبار و به‌روزرسانی‌ها ایمیل خود را وارد کنید
              </p>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 outline-none"
                />
                <button className="px-4 py-2 rounded-md bg-indigo-600 text-white">ثبت</button>
              </form>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} نام برند شما. تمامی حقوق محفوظ است.
            </div>
            <div className="text-sm text-gray-400">طراحی شده با ♥ توسط تیم شما</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
