import { BsArrowRightShort } from "react-icons/bs";
import { discounts } from "../../utils/constants";

const Discounts = () => {
 
  return (
    <section className="common-bg mt-[200px]">
      <div className="section">
        <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between  lg:gap-x-12">
          {discounts.map((discount, index) => (
            <article
              key={index}
              className="bg-primary relative -top-[100px] border-inner p-6 flex flex-col items-center gap-y-4"
            >
              <h3 className="font-bold text-center font-oswald pt-7">
                {discount.name}
              </h3>
              <p className="text-white">{discount.desc}</p>
              <button className="capitalize flex items-center gap-x-2 my-4 group transition-all duration-500 ">
                <span className="cursor-pointer z-[1000]">read more</span>
                <span>
                  <BsArrowRightShort className="group-hover:translate-x-1" />
                </span>
              </button>
            </article>
          ))}
        </div>
        <div className="flex flex-col items-center pb-[60px] gap-y-4">
          <h1 className="text-white font-oswald">
            30% DISCOUNT FOR THIS SUMMER
          </h1>
          <button className="btn btn-primary ">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
