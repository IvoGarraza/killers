'use client'
import React, { useState, useEffect } from "react";
import './Eslogan.css'
import Rotador from "../Rotador/Rotador";

const Eslogan = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  
  // Array con las clases de posición que quieres alternar
  const positions = ['sm:-bottom-0 -bottom-0', 'sm:-bottom-12 -bottom-7', 'sm:-bottom-24 -bottom-14'];
  const positionsDos = ['sm:-bottom-0 -bottom-1', 'sm:-bottom-12 -bottom-8', 'sm:-bottom-24 -bottom-15'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition(prev => (prev + 1) % positions.length);
    }, 3000); // Cambia cada 3 segundos
    
    return () => clearInterval(interval);
  }, [positions.length]);

  return (
    <div className="w-full sm:h-72 h-72 flex flex-col text-start items-start justify-center text-white sm:text-5xl text-lg font-bold uppercase relative">
      <div className="py-1 flex flex-row w-full overflow-hidden">
        somos
        <div className="ml-4 text-cuarto relative sm:w-96 w-auto ">
            <div className={`palabras absolute transition-all duration-500 delay-100 ease-in-out ${positions[currentPosition]}`}>
                <div className="">killers</div>
                <div className="">agencia</div>
                <div className="">productora</div>
            </div>
        </div>
      </div>
      <div className="py-1">y hacemos que tu estrategia sea letal</div>
      <div className="py-1 flex flex-row sm:h-14 h-8">
        con
        <div className="ml-4 text-cuarto relative w-96 overflow-hidden">
            <div className={`palabras absolute transition-all duration-500 ease-in-out ${positionsDos[currentPosition]}`}>
                <div className="">creatividad</div>
                <div className="">innovacion</div>
                <div className="">resultados</div>
            </div>
        </div>
      </div>
      <div className="py-1">todo en un solo disparo</div>
      <Rotador />
    </div>
  );
};

export default Eslogan;