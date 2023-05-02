/* eslint-disable react/prop-types */

const Input = ({ name, placeholder, value, onChange, type }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      className="p-3 bg-white placeholder:text-gray flex-1 outline-none focus:outline-none"
    />
  );
};

export default Input;
