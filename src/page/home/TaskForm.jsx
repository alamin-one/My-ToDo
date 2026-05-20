import Textarea from '../../components/ui/Textarea';
import Input from '../../components/ui/Input';

const TaskForm = () => {
  return (
    <div className="w-full mt-5 md:mt-7 p-5 border border-BORDER rounded-xl  bg-BG-SEC ">
      <form action="">
        <div className="flex">
          <Input type="text" name="task" id="" placeholder="Task Title..." />
          <button className="shrink-0  text-white ml-4 px-5 py-2 rounded-xl bg-HEADING/60 hover:bg-HEADING/20">
            ADD TASK
          </button>
        </div>
        <Textarea
          name="description"
          id="description"
          placeholder="Description (optional)..."
          className=""
        ></Textarea>
      </form>
    </div>
  );
};

export default TaskForm;
