import PlayButton from "./PlayButton";

const Hero = () => {
  return (
    <section className="hero-bg h-screen bg-center bg-cover ">
      <div className="flex  flex-col items-center h-full justify-center lg:items-start lg:justify-stretch lg:pt-12 lg:pl-12 gap-y-2 ">
        <h1 className="font-pacifico text-primary text-[calc(1.375rem+1.5vw)] ">
          Super Crispy
        </h1>
        <h1 className="text-white font-bold font-oswald text-[calc(1.625rem+4.5vw)]">
          CAKEZONE
        </h1>
        <h3 className="uppercase font-bold text-white font-oswald text-[calc(1.375rem+1.5vw)]">
          THE BEST CAKE IN LONDON
        </h3>
        <div className="pt-12 flex gap-x-8">
          <button className="btn btn-primary">Read More</button>
          <PlayButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
