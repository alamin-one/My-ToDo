const Input = ({
  type = 'text',
  name = '',
  id = '#',
  placeholder,
  className = '',
  ...rest
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`w-full ps px-5 py-2 border rounded-xl border-BORDER focus:outline-none focus:ring-1 focus:ring-HEADING ${className}`}
      {...rest}
    />
  );
};

export default Input;
