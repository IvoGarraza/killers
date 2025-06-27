"use client";
import React, { useState, useEffect } from "react";
import Eslogan from "./Eslogan/Eslogan";
import { motion, useScroll, useTransform } from "framer-motion";
import Corner from "../svg/Corner";
import CornerDos from "../svg/CornerDos";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array con tus videos
  const videos = [
    "/assets/videostock1.mp4",
    "/assets/videostock3.mp4",
    "/assets/videostock4.mp4",
  ];

  const videoRef = React.useRef(null);
  const { scrollY } = useScroll();
  // El valor 0.3 puede ajustarse para más o menos efecto parallax
  const y = useTransform(scrollY, [0, 500], [0, 10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 3000); // Mismo tiempo que el eslogan (3 segundos)

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <div className="sm:pt-24 sm:px-8 px-4 w-full h-screen sm:mb-20 mb-10">
      <Eslogan currentIndex={currentIndex} />
      <div className="rounded-2xl overflow-hidden h-2/3 relative">
        <motion.video
          key={currentIndex} // Fuerza re-render cuando cambia el video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover sm:object-fit duration-500"
          ref={videoRef}
          style={{ y }}
        >
          <source src={videos[currentIndex]} type="video/mp4" />
        </motion.video>
        <Corner clases="w-18 h-18 fill-primario absolute z-20 left-0 bottom-1/6 -rotate-90"></Corner>
        <div className="absolute h-1/6 sm:w-1/5 w-3/5 z-20 bottom-0 left-0 p-1 bg-primario flex flex-row items-center justify-center"></div>
        <CornerDos clases="sm:h-18 h-1/6 fill-primario absolute z-30 scale-x-[-1] -rotate-180 sm:left-1/5 left-3/5 -bottom-0"></CornerDos>
      </div>
    </div>
  );
};

export default Hero;
