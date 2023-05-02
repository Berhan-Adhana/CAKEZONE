import AboutUs from "../components/about/AboutUs";
import Stats from "../components/stat/Stats";
import MenuAndPricing from "../components/menuandpricing/MenuAndPricing";
import Discounts from "../components/discount/Discounts";
import Teams from "../components/team/Teams";
import Special from "../components/special/Special";
import Hero from "../components/hero/Hero";
import Testimonial from "../components/testimonial/Testimonial";
// import { useState } from "react";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <Hero />
      {/* about us */}
      <AboutUs />
      {/* stats */}
      <Stats />
      {/* Menu and pricing */}
      <MenuAndPricing />
      {/* Discounts */}
      <Discounts />
      {/* Team Members*/}
      <Teams />
      {/*Special Kombo*/}
      <Special />
      {/* Testimonial */}
      <Testimonial />
    </div>
  );
};

export default Home;
