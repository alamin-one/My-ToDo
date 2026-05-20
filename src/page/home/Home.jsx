import LInk from '../../components/ui/LInk';
import DashboardStats from './DashboardStats';
import TaskForm from './TaskForm';
import TodoCard from './TodoCard';

const Home = () => {
  return (
    <>
      {/* DashboardStats */}

      <div className="flex justify-between gap-5">
        <DashboardStats
          className="bg-BG-SEC  border-BORDER text-white"
          label="Total"
          totalCount={3}
        />
        <DashboardStats
          className="bg-HEADING/5  border-HEADING/20"
          label="Active"
          totalCount={2}
        />
        <DashboardStats
          className="bg-green-800/10 border-green-800/60"
          label="Done"
          totalCount={6}
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
            <LInk
              className="hover:border-BORDER  hover:bg-HEADING hover:text-BG"
              lable="All"
            />
            <LInk
              className="hover:border-BORDER  hover:bg-HEADING hover:text-BG"
              lable="Active"
            />

            <LInk
              className="hover:border-BORDER  hover:bg-HEADING hover:text-BG"
              lable="Completed"
            />
          </div>

          <LInk
            className="hover:border-BORDER  hover:bg-HEADING hover:text-BG"
            lable="Delete All"
          />
        </div>

        {/*
        TodoCard Box 
        */}
        <div>
          {/*
       TodoCard 
       */}
          <TodoCard />
        </div>
      </div>
    </>
  );
};

export default Home;
