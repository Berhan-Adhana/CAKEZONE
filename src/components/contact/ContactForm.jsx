
import { useState } from "react";
import Input from "./Input";

const ContactForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form className="flex flex-col gap-y-6 lg:px-[150px]  pb-12">
      <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-5">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={input.name}
          onChange={(e) => handleInputChange(e)}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={input.email}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        value={input.subject}
        onChange={(e) => handleInputChange(e)}
      />

      <textarea
        rows={4}
        value={input.message}
        name="message"
        onChange={(e) => handleInputChange(e)}
        className="placeholder:text-gray p-3 outline-none focus:outline-none"
        placeholder="Message"
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          console.log(input);
        }}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
