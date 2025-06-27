"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import cohete from "../../../../../public/assets/killers-cohete.png";

const Rotador = () => {
  const targetRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["-30deg", "45deg"]);

  // Asegurar que solo se ejecute en el cliente
  useEffect(() => {
    setIsClient(true);
    setIsMobile(window.innerWidth < 640);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Texto que quieres mostrar
  const text = "DESCUBRE MAS DESCUBRE MAS ";

  // Función para crear el texto circular
  const CircularText = ({ text, radius = 80 }) => {
    if (!isClient) return null; // No renderizar en el servidor

    const characters = text.split("");
    const angleStep = 360 / characters.length;

    return (
      <motion.div
        className="absolute inset-0 w-full h-full text-primario z-20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {characters.map((char, index) => {
          const angle = angleStep * index;
          const radian = (angle * Math.PI) / 180;
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;

          return (
            <span
              key={index}
              className="absolute text-sm font-medium z-10"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${
                  angle + 90
                }deg)`,
                transformOrigin: "center",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <motion.div
      ref={targetRef}
      style={{ rotate }}
      className="sm:size-44 size-36 z-40 absolute sm:right-24 right-4 sm:-bottom-22 -bottom-16 bg-rojo flex items-center justify-center rounded-full p-2"
    >
      {/* Texto circular - solo se renderiza en el cliente */}
      <CircularText text={text} radius={isMobile ? 48 : 65} />

      {/* Centro con cohete */}
      <div
        style={{
          background:
            "linear-gradient(-45deg, #eae2b7 40%, #fcbf49 50%, #eae2b7 60%)",
          backgroundSize: "300%",
          backgroundPositionX: "-150%",
        }}
        className="bg-fondo-claro rounded-full p-8 z-10"
      >
        <Image alt="cohete" className="sm:size-24 size-16" src={cohete} />
      </div>
    </motion.div>
  );
};

export default Rotador;
