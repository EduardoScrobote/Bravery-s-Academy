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
      <Carousel />
    </motion.div>
  );
}

export default App;
