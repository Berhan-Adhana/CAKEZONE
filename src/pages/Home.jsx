import AboutUs from "../components/about/AboutUs";
import Stats from "../components/stat/Stats";
import MenuAndPricingSection from "../components/menuandpricing/MenuAndPricingSection";
import Discounts from "../components/discount/Discounts";
import Teams from "../components/team/Teams";
import Special from "../components/special/Special";
import Hero from "../components/hero/Hero";
import Testimonial from "../components/testimonial/Testimonial";
import Transitions from "../components/common/Tranisitions";
// import { useState } from "react";

const Home = () => {
  return (
    <Transitions>
      {/* Hero */}
      <Hero />
      {/* about us */}
      <AboutUs />
      {/* stats */}
      <Stats />
      {/* Menu and pricing */}
      <MenuAndPricingSection />
      {/* Discounts */}
      <Discounts />
      {/* Team Members*/}
      <Teams />
      {/*Special Kombo*/}
      <Special />
      {/* Testimonial */}
      <Testimonial />
    </Transitions>
  );
};

export default Home;
