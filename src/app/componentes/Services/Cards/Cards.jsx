import Image from "next/image";
import React from "react";
import img1 from "../../../../../public/assets/prensa.jpg";
import img2 from "../../../../../public/assets/influencer.jpg";
import img3 from "../../../../../public/assets/evento.jpg";
import img4 from "../../../../../public/assets/rrss.jpg";
import img5 from "../../../../../public/assets/produccion.jpg";

const Cards = () => {
  return (
    <div className="w-full h-1/2 grid sm:grid-cols-5 grid-cols-1 sm:gap-4 gap-2 items-center justify-center ">
      <div className="w-full h-full p-2 flex sm:flex-col flex-row overflow-hidden rounded-xl bg-terciario">
        <div className="h-1/2 rounded-xl overflow-hidden">
          <Image
            alt="prensa"
            src={img1}
            className="h-full w-full object-cover"
          ></Image>
        </div>
        <div className="p-2">
          <span className="text-black text-2xl font-bold">Prensa</span>
          <p className="text-black text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
      <div className="w-full h-full p-2 flex sm:flex-col flex-row overflow-hidden rounded-xl bg-terciario">
        <div className="h-1/2 rounded-xl overflow-hidden">
          <Image
            alt="influencer"
            src={img2}
            className="h-full w-full object-cover"
          ></Image>
        </div>
        <div className="p-2">
          <span className="text-black text-2xl font-bold">Influencer</span>
          <p className="text-black text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
      <div className="w-full h-full p-2 flex sm:flex-col flex-row overflow-hidden rounded-xl bg-terciario">
        <div className="h-1/2 rounded-xl overflow-hidden">
          <Image
            alt="evento"
            src={img3}
            className="h-full w-full object-cover"
          ></Image>
        </div>
        <div className="p-2">
          <span className="text-black text-2xl font-bold">Evento</span>
          <p className="text-black text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
      <div className="w-full h-full p-2 flex sm:flex-col flex-row overflow-hidden rounded-xl bg-terciario">
        <div className="h-1/2 rounded-xl overflow-hidden">
          <Image
            alt="rrss"
            src={img4}
            className="h-full w-full object-cover"
          ></Image>
        </div>
        <div className="p-2">
          <span className="text-black text-2xl font-bold">RRSS</span>
          <p className="text-black text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
      <div className="w-full h-full p-2 flex sm:flex-col flex-row overflow-hidden rounded-xl bg-terciario">
        <div className="h-1/2 rounded-xl overflow-hidden">
          <Image
            alt="produccion"
            src={img5}
            className="h-full w-full object-cover"
          ></Image>
        </div>
        <div className="p-2">
          <span className="text-black text-2xl font-bold">Produccion</span>
          <p className="text-black text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
