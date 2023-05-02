import AboutUs from "../components/about/AboutUs";
import NameBanner from "../components/common/NameBanner";
import Stats from "../components/stat/Stats";

const About = () => {
  return (
    <div>
      <NameBanner title="About us" />
        <AboutUs/>
        <Stats/>
    </div>
  );
};

export default About;
