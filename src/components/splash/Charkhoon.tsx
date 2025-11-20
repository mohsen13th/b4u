"use client";

import Lottie from "lottie-react";
import bikeAnimation from "@/assets/bike.json";
import cloudAnimation from "@/assets/Clouds.json";
import grassAnimation from "@/assets/greenGrass.json";
import sunAnimation from "@/assets/sun.json";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const SplashScreen = () => {
  const router = useRouter();

  const handleCloudComplete = () => {
    router.push("/mobileApp/categories");
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 5, duration: 0.5 }}
        className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-white to-teal-50 z-[9999]"
        style={{
          width: "375px",
          height: "100vh",
          margin: "0 auto",
        }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <Lottie
            animationData={grassAnimation}
            loop
            autoplay
            className="absolute bottom-30 w-full z-10"
            style={{ animationDuration: "3s" }}
          />
          <Lottie
            animationData={bikeAnimation}
            loop
            autoplay
            className="absolute bottom-5 right-[1%] w-12/12 z-20"
            style={{ animationDuration: "3s" }}
          />
          <Lottie
            animationData={sunAnimation}
            loop={false}
            autoplay
            className="absolute top-30 right-[0%] w-6/12 z-30"
            style={{
              animationDuration: "2s",
              transition: "opacity 0.5s",
            }}
          />
          <Lottie
            animationData={cloudAnimation}
            loop={false}
            autoplay
            onComplete={handleCloudComplete}
            className="absolute top-20 right-[15%] w-full z-30"
            style={{
              animationDuration: "2s",
              transition: "opacity 0.5s",
              transform: "scaleX(-1)",
            }}
          />
          <Lottie
            animationData={cloudAnimation}
            loop={false}
            autoplay
            className="absolute top-40 left-[15%] w-full z-30"
            style={{
              animationDuration: "5s",
              transition: "opacity 0.5s",
            }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 1,
              duration: 1.2,
              ease: "easeOut",
            }}
            className="absolute inset-x-0 top-15 left-0 right-0 text-center text-5xl font-extrabold text-cyan-600 tracking-wide"
            style={
              {
                // textShadow: "0 0 20px rgba(45, 212, 191, 0.6)",
              }
            }
          >
            Charkhoon
          </motion.h1>
        </div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
