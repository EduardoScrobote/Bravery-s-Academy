import { Route, Routes } from "react-router-dom";
import "./App.css";
import InitialPage from "./pages/InitialPage";
import Coach from "./pages/Coach";
import DualCoach from "./pages/DualCoach";
import TeamCoach from "./pages/TeamCoach";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/coach" element={<Coach />} />
      <Route path="/coach/dual" element={<DualCoach />} />
      <Route path="/coach/teams" element={<TeamCoach />} />
    </Routes>
  );
}

export default App;
