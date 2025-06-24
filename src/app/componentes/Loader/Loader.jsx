import React from "react";
import "./Loader.css";
import LoaderLogo from "../svg/LoaderLogo";
import { delay, motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="w-full h-screen bg-cuarto">
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ delay: 3.5 }}
        className="w-full h-full bg-terciario"
      >
        <motion.div
          initial={{ height: "100%" }}
          animate={{ height: "0%" }}
          transition={{ delay: 3 }}
          className="w-full h-full flex items-center justify-center bg-primario"
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3 }}
            className="svg-placeholder"
          >
            <LoaderLogo></LoaderLogo>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
