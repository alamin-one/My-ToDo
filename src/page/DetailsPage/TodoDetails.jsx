import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import LInk from '../../components/ui/LInk';
import Textarea from '../../components/ui/Textarea';
import { useToDoContext } from '../../context/TodoProvider';

import { FaCheck } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';

const TodoDetails = () => {
  //Context is used through a custom hook.
  const { loading, addTodo, toggleComplete, deleteTodo, updateTodo } =
    useToDoContext();

  const { state } = useLocation();
  const Titem = state;
  const Id = Titem.id;

  const [tog, setTog] = useState(state.completed);
  const alldata = addTodo.find(I => I.id == Id);
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
    <>
      <Link to={'/'}>
        <LInk lable="<" />
      </Link>

      <div className=" mt-3 p-5  border border-BORDER hover:border-HEADING/50 rounded-xl bg-BG-SEC ">
        {/*  */}
        <div className="flex gap-5">
          <p
            className={`text-[10px] font-bold px-3 py-1 border rounded-xl w-fit
            ${tog ? 'text-green-300 green-300/30' : ' text-HEADING  border-HEADIN'}`}
          >
            {tog ? <>Completed</> : <> Active</>}
          </p>
          <p className="text-[12px] text-gray-300/30 mt-1">
            {state.createDate}
          </p>
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
        {/* Delete Edit Save Mark Acitve and Mark Complete Button*/}
        <div className="flex gap-5 mt-5">
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

          {isHide ? (
            <button
              onClick={() => {
                updateTodo(state, editVal);
                setIsHide(prev => !prev);
              }}
              className={`border border-BORDER rounded-lg hover:border-HEADING/80  ps p-1 bg-BG-SEC  hover:text-HEADING/80 px-3 py-1 cursor-pointer`}
            >
              {' '}
              Save{' '}
            </button>
          ) : (
            <button
              onClick={() => setIsHide(prev => !prev)}
              className={`border border-BORDER rounded-lg hover:border-HEADING/80  ps p-1 bg-BG-SEC  hover:text-HEADING/80 px-3 py-1 cursor-pointer`}
            >
              {' '}
              Edit{' '}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoDetails;
