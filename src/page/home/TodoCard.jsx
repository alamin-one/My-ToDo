import CheckBox from '../../components/ui/CheckBox';

const TodoCard = () => {
  return (
    <div className="flex justify-between items-center gap-4 p-5 border border-BORDER hover:border-HEADING/50 rounded-xl bg-BG-SEC ">
      <CheckBox />

      <div className="w-[80%]">
        <h2 className="">Lorem, ipsum dolor.</h2>
        <p className="line-clamp-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores, ratione.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores, ratione.
        </p>
        <p className="text-[12px] text-gray-300/30 mt-1">May 19, 11:31 AM</p>
      </div>

      <button className="border border-BORDER rounded-xl hover:border-red-400  ps p-2 bg-BG-SEC  hover:text-red-400">
        de
      </button>
    </div>
  );
};

export default TodoCard;
