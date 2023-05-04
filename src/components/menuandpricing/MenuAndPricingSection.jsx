import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { cakes } from "../../utils/constants";

const MenuAndPricingSection = () => {
  const [selectedButton, setSelectedButton] = useState("birthday");
  const onClickCakeType = (e, cakeType) => {
    e.preventDefault();
    setSelectedButton(cakeType);
  };

  return (
    <section className="section overflow-x-hidden">
      <SectionTitle subTitle="Menu & Pricing" title="EXPLORE OUR CAKES" />
      <div className="flex flex-col items-center">
        <div className="bg-dark relative border-inner py-8 flex gap-x-6 justify-center px-12 mt-12">
          <button
            className={`text-white uppercase cursor-pointer z-[999] p-2 ${
              selectedButton === "birthday" ? "bg-primary" : ""
            }`}
            onClick={(e) => onClickCakeType(e, "birthday")}
          >
            Birthday
          </button>
          <button
            className={`text-white uppercase cursor-pointer z-[999] p-2 block ${
              selectedButton === "wedding" ? "bg-primary" : ""
            }`}
            onClick={(e) => onClickCakeType(e, "wedding")}
          >
            wedding
          </button>
          <button
            className={`text-white uppercase cursor-pointer z-[999] p-2 ${
              selectedButton === "custom" ? "bg-primary" : ""
            }`}
            onClick={(e) => onClickCakeType(e, "custom")}
          >
            custom
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-12 mt-12">
          {cakes
            .filter((cake) => cake.type === selectedButton)
            .map((c) => {
              return c.data.map((singleCake, index) => (
                <motion.article
                  initial={
                    index % 2 === 0
                      ? { x: -200, opacity: 0 }
                      : { x: 200, opacity: 0 }
                  }
                  whileInView={
                    index % 2 === 0
                      ? { x: 0, opacity: 1 }
                      : { x: 0, opacity: 1 }
                  }
                  transition={{ duration: 1.5, delay: index * 0.2 + 1 }}
                  viewport={{ once: true }}
                  key={index}
                  className={`flex flex-col xs:flex-row bg-secondary list ${
                    index % 2 === 0 ? "" : ""
                  }`}
                >
                  <div className="relative shrink-0">
                    <img
                      src={singleCake.image}
                      alt={singleCake.name}
                      className="shrink-0 grow w-full"
                    />
                    <h4 className=" bg-black text-primary font-bold font-oswald flex justify-center">{`$${singleCake.price}`}</h4>
                  </div>
                  <div className="relative border-inner p-4">
                    <h3 className="font-[500] font-oswald">
                      {singleCake.name}
                    </h3>
                    <p className="text-gray">{singleCake.desc}</p>
                  </div>
                </motion.article>
              ));
            })}
        </div>
      </div>
    </section>
  );
};

export default MenuAndPricingSection;
