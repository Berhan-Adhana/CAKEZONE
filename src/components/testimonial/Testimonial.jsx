import { testimonials } from "../../utils/constants";
import SectionTitle from "../common/SectionTitle";

import Carousel from "./Carousel.jsx";
const Testimonial = () => {
 

  return (
    <section className="mb-[80px]">
      <SectionTitle subTitle="Testimonial" title="OUR CLIENTS SAY!!!" />
      <Carousel testimonials={testimonials} />
    </section>
  );
};

export default Testimonial;
