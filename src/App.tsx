import { Route, Routes } from "react-router-dom";
import "./App.css";
import InitialPage from "./pages/InitialPage";
import Coach from "./pages/Coach";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/coach" element={<Coach />} />
    </Routes>
  );
}

export default App;
