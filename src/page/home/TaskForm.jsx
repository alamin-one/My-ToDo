import { useState } from 'react';
import { useToDoContext } from '../../context/TodoProvider';

import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';

const TaskForm = () => {
  //
  const [adTask, setAdTask] = useState('');
  const [adTaskDetail, setAdTaskDetail] = useState('');
  const { submitToDo } = useToDoContext();

  return (
    <div className="w-full mt-5 md:mt-7 p-5 border border-BORDER rounded-xl  bg-BG-SEC ">
      <form
        action=""
        onSubmit={e => {
          submitToDo(e, adTask, adTaskDetail);
          setAdTask('');
          setAdTaskDetail('');
        }}
      >
        <div className="flex">
          <Input
            type="text"
            name="task"
            id=""
            placeholder="Task Title..."
            value={adTask}
            onChange={e => setAdTask(e.target.value)}
          />
          <button
            type="submit"
            className="shrink-0  text-white ml-4 px-5 py-2 rounded-xl bg-HEADING/60 hover:bg-HEADING/20 cursor-pointer"
          >
            ADD TASK
          </button>
        </div>
        <Textarea
          name="description"
          id="description"
          placeholder="Description (optional)..."
          className=""
          value={adTaskDetail}
          onChange={e => setAdTaskDetail(e.target.value)}
        ></Textarea>
      </form>
    </div>
  );
};

export default TaskForm;
