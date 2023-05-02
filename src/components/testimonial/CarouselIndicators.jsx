/* eslint-disable react/prop-types */

const CarouselIndicators = ({ testimonials, currentIndex }) => {
  return (
    <div className="flex justify-center items-baseline gap-x-2">
      {testimonials.map((testimonial, index) => (
        <span
          key={index}
          className={` w-4  inline-block ${
            currentIndex === index ? "h-12 bg-primary " : "h-7 bg-gray/50"
          } transition-all duration-300`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
