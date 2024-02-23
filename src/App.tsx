import { motion } from "framer-motion";
import "./App.css";
import Benefits from "./components/Benefits";
import Capture from "./components/CapturePage";
import Carousel from "./components/carousel/Carousel";
function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center items-center"
    >
      <Capture />
      <Benefits />
      <div className="w-full h-screen items-center flex flex-col">
        <h1 className="mb-16 text-braves-red text-[52px] font-bold">
          Feedback dos Bravos
        </h1>
        <Carousel />
      </div>
    </motion.div>
  );
}

export default App;
