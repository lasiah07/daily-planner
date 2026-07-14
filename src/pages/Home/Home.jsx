import "./Home.css";

import GreetingCard from "../../components/GreetingCard/GreetingCard";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

import { user, progress } from "../../data/dummyData";

function Home() {
  return (
    <div className="home">

      <GreetingCard
        name={user.name}
        quote={user.quote}
      />

      <ProgressCard
        completed={progress.completed}
        total={progress.total}
      />

      <BottomNavigation />

    </div>
  );
}

export default Home;