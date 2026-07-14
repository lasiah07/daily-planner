import "./Home.css";

import GreetingCard from "../../components/GreetingCard/GreetingCard";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import TaskList from "../../components/TaskList/TaskList";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

import { user, tasks } from "../../data/dummyData";

function Home() {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="home">
      <GreetingCard
        name={user.name}
        quote={user.quote}
      />

      <ProgressCard
        completed={completedTasks}
        total={totalTasks}
      />

      <TaskList tasks={tasks} />

      <BottomNavigation />
    </div>
  );
}

export default Home;