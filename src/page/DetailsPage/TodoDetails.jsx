const TodoDetails = () => {
  return (
    <div className=" mt-4 p-5 border border-BORDER hover:border-HEADING/50 rounded-xl bg-BG-SEC ">
      {/*

      */}
      <div className="flex gap-5">
        <p className="text-[10px] text-HEADING font-bold px-3 py-1 border border-HEADING rounded-xl w-fit">
          Active
        </p>
        <p className="text-[10px] text-green-300  font-bold px-3 py-1 border green-300/30 rounded-xl w-fit">
          Active
        </p>
        <p className="text-[12px] text-gray-300/30 mt-1">May 19, 11:31 AM</p>
      </div>
      {/*

      */}
      <div className="mt-5 border-b border-b-BORDER pb-5">
        <h2 className="mb-4">Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus
          recusandae officia similique, in nam, possimus reprehenderit quam
          maxime ipsum dignissimos architecto magni quaerat beatae, molestias
          distinctio! Sapiente laudantium at fuga voluptatem quaerat enim
          repudiandae quas, alias facere iure deleniti.
        </p>
      </div>
      {/*

      */}
      <div className="mt-5">
        <button className="text-HEADING text-[12px] px-3 py-1 border border-HEADING/40 rounded-md bg-HEADING/10">
          Mark complete
        </button>
        <button className="text-green-300 text-[12px] px-3 py-1 border border-green-300/30 rounded-md bg-green-800/30">
          Mark complete
        </button>
      </div>
    </div>
  );
};

export default TodoDetails;
