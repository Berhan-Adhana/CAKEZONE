import { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import weddingCake from "../../assets/img/cake-1.jpg";
import birthdayCake from "../../assets/img/cake-2.jpg";
import customCake from "../../assets/img/cake-3.jpg";

const MenuAndPricing = () => {
  const [selectedButton, setSelectedButton] = useState("birthday");
  const onClickCakeType = (e, cakeType) => {
    e.preventDefault();
    setSelectedButton(cakeType);
  };

  const cakes = [
    {
      type: "birthday",
      data: [
        {
          image: birthdayCake,
          name: "BIRTHDAY CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: birthdayCake,
          name: "BIRTHDAY CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: birthdayCake,
          name: "BIRTHDAY CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: birthdayCake,
          name: "BIRTHDAY CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: birthdayCake,
          name: "BIRTHDAY CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: birthdayCake,
          name: "BIRTHDAY CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
      ],
    },
    {
      type: "custom",
      data: [
        {
          image: customCake,
          name: "CUSTOM CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: customCake,
          name: "CUSTOM CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: customCake,
          name: "CUSTOM CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: customCake,
          name: "CUSTOM CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: customCake,
          name: "CUSTOM CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: customCake,
          name: "CUSTOM CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
      ],
    },
    {
      type: "wedding",
      data: [
        {
          image: weddingCake,
          name: "WEDDING CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: weddingCake,
          name: "WEDDING CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: weddingCake,
          name: "WEDDING CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: weddingCake,
          name: "WEDDING CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: weddingCake,
          name: "WEDDING CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
        {
          image: weddingCake,
          name: "WEDDING CAKE",
          price: "99.00",
          desc: "Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo",
        },
      ],
    },
  ];
  return (
    <section className="section">
      <div className="flex flex-col items-center">
        <SectionTitle subTitle="Menu & Pricing" title="EXPLORE OUR CAKES" />
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
                <article
                  key={index}
                  className="flex flex-col xs:flex-row bg-secondary "
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
                </article>
              ));
            })}
        </div>
      </div>
    </section>
  );
};

export default MenuAndPricing;
