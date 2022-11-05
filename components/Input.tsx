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
      className="relative block w-full appearance-none rounded-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-3 mt-3"
      placeholder={placeholder}
    />
  );
};

export default Input;
