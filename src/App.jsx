import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Splash from "./pages/Splash/Splash";
import Welcome from "./pages/Welcome/Welcome";

import Home from "./pages/Home/Home";
import Calendar from "./pages/Calendar/Calendar";
import Notes from "./pages/Notes/Notes";
import Profile from "./pages/Profile/Profile";
import Routine from "./pages/Routine/Routine";
import History from "./pages/History/History";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

import BottomNavigation from "./components/BottomNavigation/BottomNavigation";

function App() {
  const location = useLocation();

  const hideBottomNavigation = [
    "/",
    "/welcome",
    "/login",
    "/register",
    "/forgot-password",
  ].includes(location.pathname);

  return (
    <>
      <Routes>
        {/* Splash */}
        <Route
          path="/"
          element={<Splash />}
        />

        {/* Welcome */}
        <Route
          path="/welcome"
          element={<Welcome />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* Main Pages */}
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
          path="/routine"
          element={<Routine />}
        />

        <Route
          path="/history"
          element={<History />}
        />

        {/* Redirect */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>

      {!hideBottomNavigation && (
        <BottomNavigation />
      )}
    </>
  );
}

export default App;