'use client'
import React from "react";
import { motion } from "framer-motion";
import logo from '../../../../public/assets/killers-logo2.png'
import Killers from "../svg/Killers";

const Navbar = () => {
  return (
    <div className="w-full sm:h-24 h-12 bg-primario flex items-center justify-between flex-row z-50 fixed">
      <motion.div
      initial={{height:'100%'}}
      animate={{height:'0%'}}
      
      className='fixed top-0 z-50 h-screen w-full bg-cuarto'></motion.div>
      <div className=" flex items-center justify-center">
        <Killers></Killers>
      </div>
      <div className="text-white w-1/3 sm:flex hidden flex-row justify-around items-center">
        <span>Inicio</span>
        <span>Servicios</span>
        <span>Clientes</span>
        <span>Nosotros</span>
      </div>
      <div className="w-1/12 flex items-center justify-center">
      </div>
    </div>
  );
};

export default Navbar;
