import SectionTitle from "../common/SectionTitle";

const Special = () => {
  return (
    <section className="section common-bg  py-[80px]">
      <SectionTitle
        subTitle="Special Kombo Pack"
        title=" SUPER CRISPY CAKES"
        isWhite={true}
      />
      <div className="flex flex-col items-center gap-y-5">
        <p className="text-white text-center max-w-xl">
          Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore
          et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea
          et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna
          sit. Sea dolore sed et.
        </p>

        <div className="flex gap-x-6">
          <button className="btn btn-primary ">Shop Now</button>
          <button className="btn btn-dark">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Special;
