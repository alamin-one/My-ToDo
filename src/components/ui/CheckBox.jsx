const CheckBox = () => {
  return (
    <>
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" className="peer hidden" />

        <div class="  w-5 h-5  border border-gray-400 rounded-md flex items-center justify-center  peer-checked:bg-HEADING  peer-checked:border-HEADING">
          <svg
            className=" peer-checked:block w-4 h-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </label>
    </>
  );
};

export default CheckBox;
