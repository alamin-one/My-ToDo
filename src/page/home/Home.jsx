import { useState } from 'react';
import LInk from '../../components/ui/LInk';
import { useToDoContext } from '../../context/TodoProvider';
import DashboardStats from './DashboardStats';
import TaskForm from './TaskForm';
import TodoCard from './TodoCard';

const Home = () => {
  const { error, loading, addTodo, toggleComplete, deleteAllToDo } =
    useToDoContext();
  const filterAry = ['All', 'Active', 'Completed'];
  const [filter, setFilter] = useState('All');

  const filterFN = () => {
    const T = addTodo.filter(F =>
      filter === 'Active'
        ? F.completed === false
        : filter === 'Completed'
          ? F.completed === true
          : F,
    );
    return T;
  };
  const filtered = filterFN();

  const total = addTodo.length;
  const Active = addTodo.filter(A => !A.completed).length;
  const Completed = addTodo.filter(A => A.completed).length;

  return (
    <>
      {/* DashboardStats */}

      <div className="flex justify-between gap-5">
        <DashboardStats
          className="bg-BG-SEC  border-BORDER text-white"
          label="Total"
          totalCount={total}
        />
        <DashboardStats
          className="bg-HEADING/5  border-HEADING/20"
          label="Active"
          totalCount={Active}
        />
        <DashboardStats
          className="bg-green-800/10 border-green-800/60"
          label="Done"
          totalCount={Completed}
        />
      </div>

      {/* 
      Task form 
      */}

      <TaskForm />

      {/*TodoContainer */}
      <div>
        {/*  FilterTabs   */}
        <div className="flex justify-between my-5">
          <div className="space-x-1.5">
            {filterAry.map((fItem, fIndex) => (
              <LInk
                lable={fItem}
                key={fIndex}
                lable={fItem}
                onClick={() => setFilter(fItem)}
                className={fItem === filter ? 'bg-HEADING/50 text-white' : ''}
              ></LInk>
            ))}
          </div>

          <LInk
            onClick={deleteAllToDo}
            className="hover:border-red-400/30  hover:text-red-400! hover:bg-BG!"
            lable="Delete All"
          />
        </div>
        <div>
          {/* TodoCard*/}
          {error && <p>There was an Error</p>}
          {loading && <p>loading...</p>}
          {!loading &&
            filtered.map((Titem, Tindex) => (
              <TodoCard
                key={Tindex}
                Titem={Titem}
                toggleComplete={toggleComplete}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default Home;
