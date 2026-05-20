const Textarea = ({
  name = '',
  id = '#',
  placeholder = '',
  className = '',
}) => {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      className={`w-full ps mt-3 px-5 py-2 border rounded-xl border-BORDER focus:outline-none focus:ring-1 focus:ring-HEADING ${className}`}
    ></textarea>
  );
};

export default Textarea;

/* w-full ps mt-3 px-5 py-2 border rounded-xl border-BORDER focus:outline-none focus:ring-1 focus:ring-HEADING */
