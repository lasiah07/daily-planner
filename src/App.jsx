import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Calendar from "./pages/Calendar/Calendar";
import Notes from "./pages/Notes/Notes";
import Profile from "./pages/Profile/Profile";

import BottomNavigation from "./components/BottomNavigation/BottomNavigation";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" />}
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