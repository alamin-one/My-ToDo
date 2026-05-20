const LInk = ({ className = '', lable = 'All' }) => {
  return (
    <button
      className={`border border-BORDER rounded-2xl ps px-5 py-1  bg-BG-SEC hover:bg-HEADING hover:text-BG ${className}`}
    >
      {lable}
    </button>
  );
};

export default LInk;
