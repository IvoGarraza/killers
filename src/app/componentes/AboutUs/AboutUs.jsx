import React from "react";
import people from "../../../../public/assets/handshake.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="h-screen w-full flex sm:flex-row flex-col">
      <div className="sm:w-1/2 w-full h-full text-terciario flex flex-col items-center justify-center px-6">
        <span className="font-bold text-4xl uppercase">Somos los <span className="text-cuarto">mejores</span></span>
        <span>en lo que hacemos</span>
{/*         <p>
          Somos KILLERS
          <br />
          Una agencia que no le tiene miedo a romper esquemas. Nacimos con una
          misión clara: impulsar marcas con ideas creativas, estrategias reales
          y una ejecución impecable. Nos mueve la pasión, la innovación y esa
          necesidad constante de hacer algo distinto — y hacerlo bien. Cada
          proyecto es un nuevo experimento. Cada cliente, un socio para crear
          algo memorable. Trabajamos como equipo, pero pensamos como
          laboratorio. Combinamos creatividad, datos y tecnología para contar
          historias que impacten. Y lo hacemos con estilo, con sentido y con
          garra.
        </p> */}
      </div>
      <div className="sm:w-1/2 w-full h-full p-6 flex items-center justify-center relative">
        <div className="rounded-2xl overflow-hidden ">
          <Image
            alt="aboutus"
            src={people}
            className="w-full"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
