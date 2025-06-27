import React from "react";
import people from "../../../../public/assets/handshake.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="h-screen w-full flex sm:flex-row flex-col text-center">
      <div className="sm:w-1/2 w-full sm:h-full h-1/4 text-terciario flex flex-col items-center justify-center px-6">
        <span className="font-bold text-4xl uppercase">
          Somos los <span className="text-cuarto">mejores</span>
        </span>
        <span className="font-bold text-4xl uppercase">en lo que hacemos</span>
      </div>
      <div className="sm:w-1/2 w-full sm:h-full h-1/3 p-6 flex items-center justify-center relative">
        <div className="rounded-2xl overflow-hidden ">
          <Image alt="aboutus" src={people} className="w-full"></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
