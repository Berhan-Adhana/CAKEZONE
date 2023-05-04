
import SectionTitle from "../common/SectionTitle.jsx";
import aboutImg from "../../assets/img/about.jpg";
import { aboutData } from "../../utils/constants.js";

const AboutUs = () => {
 
  return (
    <section className="section overflow-x-hidden">
      <SectionTitle subTitle="about us" title="Welcome To CakeZone" />
      <div className="flex justify-between gap-x-12 mt-12 flex-col lg:flex-row gap-y-8 pb-12">
        {/* about image */}

        <img src={aboutImg} alt="cake" className="max-w-full lg:w-[436px]  " />

        {/* about text */}
        <div className="flex flex-col gap-y-6">
          <h4 className="font-oswald font-bold">
            Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem sed
            stet labore lorem sit clita duo
          </h4>
          <p className="text-left lg:text-center text-gray">
            Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
            tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
            lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
            erat amet magna
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-6">
            {aboutData.map((about, index) => (
              <article
                key={index}
                className="flex flex-col items-center gap-y-6"
              >
                <span className="bg-primary p-8 inline-block relative text-white border-inner">
                  <about.icon size={40} />
                </span>
                <h4 className="uppercase font-oswald ">{about.title}</h4>
                <p className="text-center text-gray">{about.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
