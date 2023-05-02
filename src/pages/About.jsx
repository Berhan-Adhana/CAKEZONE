import AboutUs from "../components/AboutUs";
import NameBanner from "../components/common/NameBanner";
import Stats from "../components/Stats";

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
