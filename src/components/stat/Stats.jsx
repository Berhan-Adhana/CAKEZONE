import { FaCheck, FaStar } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
import { Counter } from "./Counter";

const Stats = () => {
  const statData = [
    {
      icon: FaStar,
      title: "OUR EXPERIENCE",
      numbers: 12345,
    },
    {
      icon: MdGroups2,
      title: "CAKE SPECIALIST",
      numbers: 12345,
    },
    {
      icon: FaCheck,
      title: "COMPLETE PROJECT",
      numbers: 12345,
    },
    {
      icon: GiCoffeeCup,
      title: "HAPPY CLIENTS",
      numbers: 12345,
    },
  ];
  return (
    <section className="bg-transparent common-bg py-5 mb-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 px-[65px]">
        {statData.map((stat, index) => (
          <article key={index} className="flex  items-center gap-x-6  py-5 ">
            <span className="bg-primary p-5 inline-block relative text-white border-inner">
              {<stat.icon size={30} />}
            </span>
            <div>
              <h6 className="font-bold text-primary font-oswald">
                {stat.title}
              </h6>
              <Counter maxValue={stat.numbers} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Stats;
