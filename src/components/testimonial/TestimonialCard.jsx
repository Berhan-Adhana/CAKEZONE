/* eslint-disable react/prop-types */

const TestimonialCard = ({ index, currentIndex, selectedSlideRef,testimonial }) => {
  return (
    <article
      ref={index === currentIndex ? selectedSlideRef : null}
      className={`bg-dark relative border-inner p-8 w-[350px] shrink-0  flex flex-col gap-y-6  ${
        currentIndex !== index
          ? " before:absolute before:content-[''] before:h-full before:w-full before:inset-0 before:bg-white/50 z-40"
          : ""
      }`}
    >
      <div className="flex items-center gap-x-4">
        <img
          src={testimonial.profile}
          alt={testimonial.name}
          className="w-12 h-12"
        />
        <div>
          <h3 className="text-primary font-oswald font-bold ">
            {testimonial.name}
          </h3>
          <p className="text-white">{testimonial.profession}</p>
        </div>
      </div>
      <p className="text-white">{testimonial.testimonial}</p>
    </article>
  );
};

export default TestimonialCard