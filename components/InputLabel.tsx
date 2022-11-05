type LabelProps = {
  type: string;
  children: string;
};

const InputLabel = ({ type, children }: LabelProps) => {
  return (
    <label htmlFor={type} className="sr-only">
      {children}
    </label>
  );
};

export default InputLabel;
