import React from "react";
import Cards from "./Cards/Cards";
import CornerDos from "../svg/CornerDos";
import Corner from "../svg/Corner";
import ArrowRightUp from "../svg/ArrowRightUp";

const Service = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 text-black relative ">
      <Corner clases="w-18 h-18 fill-primario absolute z-40 left-4 -top-16"></Corner>
      <CornerDos clases="sm:h-18 w-32 h-1/6 fill-terciario absolute z-40 scale-x-[-1] -rotate-180 sm:left-1/5 left-[58%] sm:-top-16 -top-28"></CornerDos>
      <div className="absolute sm:w-1/5 w-[55%] sm:h-18 h-24 bg-terciario sm:-top-16 sm:pl-24 pl-12 pt-4 -top-23.5 rounded-tl-4xl left-4 z-40">
        <span className="text-4xl font-black">Servicios</span>
      </div>
      <div className="w-full flex sm:flex-row flex-col text-center items-center sm:justify-around justify-center h-1/2 bg-terciario rounded-tr-xl">
        <span className="text-4xl font-normal px-4">
          Estos son algunos
          <br /> de los servicios que{" "}
          <span className="text-cuarto">ofrecemos</span>
        </span>
        <div className="group bg-white rounded-full p-4 mt-6 flex items-center justify-center">
          <span className="text-2xl font-bold">Conocelos</span>
          <div className="size-8 bg-cuarto rounded-full flex items-center justify-center p-2 ml-2 group-hover:rotate-[135deg] transition-all">
            <ArrowRightUp></ArrowRightUp>
          </div>
        </div>
      </div>
      <Cards></Cards>
    </div>
  );
};

export default Service;
