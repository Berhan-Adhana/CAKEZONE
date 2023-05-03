import AboutUs from "../components/about/AboutUs";
import NameBanner from "../components/common/NameBanner";
import Stats from "../components/stat/Stats";
import Transitions from "../components/common/Tranisitions";

const About = () => {
  return (
    <Transitions>
      <NameBanner title="About us" />
      <AboutUs />
      <Stats />
    </Transitions>
  );
};

export default About;
