import { Link } from 'react-router';
import CheckBox from '../../components/ui/CheckBox';
import { useToDoContext } from '../../context/TodoProvider';

import { RiDeleteBin6Line } from 'react-icons/ri';

const TodoCard = ({ Titem, toggleComplete }) => {
  const { deleteTodo } = useToDoContext();
  const Id = Titem.id;

  return (
    <div className="flex justify-between items-center mt-4 gap-4 px-4 py-3 border border-BORDER hover:border-HEADING/50 rounded-xl bg-BG-SEC ">
      <CheckBox toggleComplete={toggleComplete} Titem={Titem} />

      <div className="w-[75%] md:w-[80%]">
        <Link to={`/details/${Titem.id}`} state={Titem}>
          <h2 className="line-clamp-1">{Titem.title}</h2>
          <p className="line-clamp-1">{Titem.description}</p>
          <p className="text-[12px] text-gray-300/30 mt-1">
            {Titem.createDate}
          </p>
        </Link>
      </div>

      <button
        onClick={() => deleteTodo(Id)}
        className="border border-BORDER rounded-[10px] hover:border-red-400/40  ps p-2 bg-BG-SEC  hover:text-red-400"
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

export default TodoCard;
