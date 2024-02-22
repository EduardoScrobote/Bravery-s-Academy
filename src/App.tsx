import "./App.css";
import Benefits from "./components/Benefits";
import Capture from "./components/CapturePage";
function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Capture />
      <Benefits />
    </div>
  );
}

export default App;
