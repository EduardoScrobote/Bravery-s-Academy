import Capture from "../components/CapturePage";
import Benefits from "../components/Benefits";
import Carousel from "../components/carousel/Carousel";
import Bravery from "../components/coachs/Bravery/Bravery";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function InitialPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center items-center"
    >
      <Capture />
      <Benefits />
      <div className="w-full mt-[100px] items-center flex flex-col">
        <h1 className="mb-16 text-braves-red text-[52px] font-bold">
          Feedback dos Bravos
        </h1>
        <Carousel />
      </div>
      <Bravery />
      <Footer />
    </motion.div>
  );
}

export default InitialPage;
