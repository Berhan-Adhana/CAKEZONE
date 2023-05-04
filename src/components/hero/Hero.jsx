import PlayButton from "./PlayButton";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-bg h-screen bg-center bg-cover">
      <div className="flex  flex-col items-center h-full justify-center lg:items-start lg:justify-stretch lg:pt-12 lg:pl-12 gap-y-2 ">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="font-pacifico text-primary text-[calc(1.375rem+1.5vw)] "
        >
          Super Crispy
        </motion.h1>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
          className="text-white font-bold font-oswald text-[calc(1.625rem+4.5vw)]"
        >
          CAKEZONE
        </motion.h1>
        <motion.h3
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          viewport={{ once: true }}
          className="uppercase font-bold text-white font-oswald text-[calc(1.375rem+1.5vw)]"
        >
          THE BEST CAKE IN LONDON
        </motion.h3>
        <div className="pt-12 flex gap-x-8">
          <button className="btn btn-primary">Read More</button>
          <PlayButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
