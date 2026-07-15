import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";
import Tracking from "./pages/Tracking/Tracking";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;