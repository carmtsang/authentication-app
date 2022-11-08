type InputProps = {
  type: string;
  placeholder: string;
};

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      id={type}
      name={type}
      type={type}
      autoComplete={type}
      required
      className="relative block w-full rounded border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 sm:text-sm mb-3 mt-3"
      placeholder={placeholder}
    />
  );
};

export default Input;
