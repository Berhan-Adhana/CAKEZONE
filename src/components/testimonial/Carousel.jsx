/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import CarouselIndicators from "./CarouselIndicators";

const Carousel = ({ testimonials }) => {
  const selectedSlideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    }, 9000);
    // selectedSlideRef.current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "center",
    // });

    return () => clearInterval(intervalId);
  }, [currentIndex, testimonials.length]);
  return (
    <div className="flex flex-col gap-y-4 mt-12">
      <div  className="flex  gap-x-[70px] overflow-x-scroll scrollbar-hide">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            index={index}
            testimonial={testimonial}
            selectedSlideRef={selectedSlideRef}
            currentIndex={currentIndex}
          />
        ))}
      </div>
      <CarouselIndicators currentIndex={currentIndex} testimonials={testimonials}/>
    </div>
  );
};

export default Carousel;
