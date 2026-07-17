import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Calendar from "./pages/Calendar/Calendar";
import Notes from "./pages/Notes/Notes";
import Profile from "./pages/Profile/Profile";
import Routine from "./pages/Routine/Routine";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import History from "./pages/History/History";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/history"
          element={<History />}
        />

        <Route
          path="/routine"
          element={<Routine />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/calendar"
          element={<Calendar />}
        />

        <Route
          path="/notes"
          element={<Notes />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="*"
          element={<Navigate to="/home" />}
        />
      </Routes>

      <BottomNavigation />
    </>
  );
}

export default App;