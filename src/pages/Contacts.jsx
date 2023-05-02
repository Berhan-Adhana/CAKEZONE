/* eslint-disable react/prop-types */
import { MdLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import NameBanner from "../components/common/NameBanner";
import { BsPhoneVibrate } from "react-icons/bs";
import ContactForm from "../components/ContactForm";

const Contacts = () => {
  const contactInfo = [
    {
      icon: MdLocationOn,
      title: "OUR OFFICE",
      address: "123 Street, New York, USA",
    },
    {
      icon: AiOutlineMail,
      title: "EMAIL US",
      address: "info@example.com",
    },
    {
      icon: BsPhoneVibrate,
      title: "CALL US",
      address: "+012 345 6789",
    },
  ];

  return (
    <div className="mb-[80px]">
      <NameBanner title="Contact us" />
      <section className=" section common-bg mt-[100px] min-h-screen">
        <div className="flex flex-col  md:flex-row md:flex-wrap lg:flex-nowrap gap-y-6  items-center justify-around gap-x-[100px]">
          {contactInfo.map((contact, index) => (
            <article
              key={index}
              className="bg-primary w-full min-w-[250px] relative border-inner flex-1 py-8 px-12  flex flex-col gap-y-6 items-center justify-center -top-12"
            >
              <contact.icon className="text-white" size={50} />
              <h6 className="font-[500] uppercase">{contact.title} </h6>

              {contact.title === "EMAIL US" && (
                <a
                  href={`mailto:${contact.address}`}
                  className="text-white hover:text-black transition-colors duration-300 z-30 "
                >
                  {contact.address}
                </a>
              )}
              {contact.title === "CALL US" && (
                <a
                  href={`tel:${contact.address}`}
                  className="text-white hover:text-black transition-colors duration-300 z-30 "
                >
                  {contact.address}
                </a>
              )}
              {contact.title === "OUR OFFICE" && (
                <p className="text-white ">{contact.address}</p>
              )}
            </article>
          ))}
        </div>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contacts;
