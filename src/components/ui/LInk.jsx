const LInk = ({ className = '', lable = 'All', ...res }) => {
  return (
    <button
      className={`border border-BORDER rounded-2xl ps px-5 py-1  bg-BG-SEC hover:bg-HEADING/20 text-[12px] hover:text-white ${className}`}
      {...res}
    >
      {lable}
    </button>
  );
};

export default LInk;
