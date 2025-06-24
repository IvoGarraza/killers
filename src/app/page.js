import Navbar from "./componentes/Navbar/Navbar";
import Hero from "./componentes/Hero/Hero";
import Service from "./componentes/Services/Service";
import AboutUs from "./componentes/AboutUs/AboutUs";

export default function Home() {
  return (
    <div className="bg-primario font-display overflow-hidden">
      <Navbar></Navbar>
      <Hero></Hero>
      <Service></Service>
      <AboutUs></AboutUs>
    </div>
  );
}
