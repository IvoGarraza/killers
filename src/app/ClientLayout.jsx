'use client'

import React, { useState, useEffect } from "react";
import Loader from "./componentes/Loader/Loader";

const ClientLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 4 segundos
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : children;
  /* return loading ? children : <Loader></Loader> */
};

export default ClientLayout;