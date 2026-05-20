import CheckBox from '../../components/ui/CheckBox';

const TodoCard = ({ Titem, toggleComplete }) => {
  return (
    <div className="flex justify-between items-center mt-4 gap-4 p-5 border border-BORDER hover:border-HEADING/50 rounded-xl bg-BG-SEC ">
      <CheckBox
        toggleComplete={toggleComplete}
        Titem={Titem}
      />

      <div className="w-[80%]">
        <h2 className="">{Titem.title}</h2>
        <p className="line-clamp-1">{Titem.description}</p>
        <p className="text-[12px] text-gray-300/30 mt-1">{Titem.createDate}</p>
      </div>

      <button className="border border-BORDER rounded-xl hover:border-red-400  ps p-2 bg-BG-SEC  hover:text-red-400">
        de
      </button>
    </div>
  );
};

export default TodoCard;
