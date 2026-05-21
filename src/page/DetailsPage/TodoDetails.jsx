import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router';
import Textarea from '../../components/ui/Textarea';
import { useToDoContext } from '../../context/TodoProvider';

const TodoDetails = () => {
  const { loading, addTodo, toggleComplete, deleteTodo, updateTodo } =
    useToDoContext();

  const { state } = useLocation();
  const Titem = state;
  const Id = Titem.id;

  const alldata = addTodo.find(I => I.id == Id);

  const [tog, setTog] = useState(state.completed);
  const [editVal, setEditVal] = useState(Titem.description);
  useEffect(() => {
    if (!loading && alldata) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEditVal(alldata.description ?? '');
    }
  }, [loading, alldata]);

  const [isHide, setIsHide] = useState(false);
  const navigate = useNavigate();

  const deletTog = () => {
    navigate('/');
  };

  return (
    <div className=" mt-4 p-5 border border-BORDER hover:border-HEADING/50 rounded-xl bg-BG-SEC ">
      {/*  */}
      <div className="flex gap-5">
        <p
          className={`text-[10px] font-bold px-3 py-1 border rounded-xl w-fit
          ${tog ? 'text-green-300 green-300/30' : ' text-HEADING  border-HEADIN'}`}
        >
          {tog ? <>Completed</> : <> Active</>}
        </p>
        <p className="text-[12px] text-gray-300/30 mt-1">{state.createDate}</p>
      </div>
      {/**/}
      <div className="mt-5 border-b border-b-BORDER pb-5">
        <h2 className="mb-4">{state.title}</h2>

        {!isHide ? (
          <p>{editVal}</p>
        ) : (
          <Textarea
            className=" min-h-60 p-0! m-0!
            border-none outline-none ring-0 focus:ring-0 focus-visible:ring-0 bg-transparent resize-none shadow-none"
            onChange={e => setEditVal(e.target.value)}
            value={editVal}
          />
        )}
      </div>
      {/*  */}
      <div className="flex gap-5 mt-5">
        {/* tog button */}
        <button
          onClick={() => {
            (toggleComplete(Titem), setTog(prev => !prev));
          }}
          className={`text-[12px] px-3 py-1 border  cursor-pointer flex justify-center items-center gap-2.5
            ${
              tog
                ? 'text-HEADING  border-HEADING/40 rounded-md bg-HEADING/10'
                : 'text-green-300 border-green-300/30 rounded-md bg-green-800/30'
            }`}
        >
          {tog ? (
            <> Mark Active</>
          ) : (
            <>
              {' '}
              <FaCheck />
              Mark complete
            </>
          )}
        </button>

        {/* delete button */}
        <button
          onClick={() => {
            (deleteTodo(Id), deletTog());
          }}
          className={`border border-BORDER rounded-lg hover:border-red-400/40  ps p-1 bg-BG-SEC  hover:text-red-400
            px-3 py-1 cursor-pointer flex justify-center items-center gap-2.5
            `}
        >
          <RiDeleteBin6Line /> Delete
        </button>

        {/* edit & save button */}

        {isHide ? (
          <button
            onClick={() => {
              updateTodo(state, editVal);
              setIsHide(prev => !prev);
            }}
            className={`border border-BORDER rounded-lg hover:border-HEADING/80  ps p-1 bg-BG-SEC  hover:text-HEADING/80 px-3 py-1 `}
          >
            {' '}
            Save{' '}
          </button>
        ) : (
          <button
            onClick={() => setIsHide(prev => !prev)}
            className={`border border-BORDER rounded-lg hover:border-HEADING/80  ps p-1 bg-BG-SEC  hover:text-HEADING/80 px-3 py-1 `}
          >
            {' '}
            Edit{' '}
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoDetails;
