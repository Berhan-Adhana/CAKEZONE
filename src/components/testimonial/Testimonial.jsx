import SectionTitle from "../common/SectionTitle";
import user1 from "../../assets/img/testimonial-1.jpg";
import user2 from "../../assets/img/testimonial-2.jpg";
import user3 from "../../assets/img/testimonial-3.jpg";
import user4 from "../../assets/img/testimonial-4.jpg";
import Carousel from "./Carousel.jsx";
const Testimonial = () => {
  const testimonials = [
    {
      profile: user1,
      name: "Client name",
      profession: "profession",
      testimonial:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam ",
    },
    {
      profile: user2,
      name: "Client name",
      profession: "profession",
      testimonial:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam ",
    },
    {
      profile: user3,
      name: "Client name",
      profession: "profession",
      testimonial:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam ",
    },
    {
      profile: user4,
      name: "Client name",
      profession: "profession",
      testimonial:
        "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam ",
    },
  ];

  return (
    <section className="mb-[80px]">
      <SectionTitle subTitle="Testimonial" title="OUR CLIENTS SAY!!!" />
      <Carousel testimonials={testimonials} />
    </section>
  );
};

export default Testimonial;
