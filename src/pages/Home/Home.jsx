import "./Home.css";

import Header from "../../components/Header/Header";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

function Home() {
  return (
    <div className="home">
      <Header />
      <BottomNavigation />
    </div>
  );
}

export default Home;