import { motion } from "framer-motion";
import Header from "./Header";

function Capture() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full h-screen"
    >
      <motion.div className="h-[100vh] flex flex-col justify-center text-white">
        <Header background="bg-main-bg" />
        <div className="h-screen flex items-end ml-[467px]  mb-56">
          <h1 className="w-[36rem] font-bold text-[52px]">
            Alcance o <span className="text-braves-red">MMR</span> dos seus
            sonhos com a{" "}
            <span className="text-braves-red">Bravery`s Academy!</span>
          </h1>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Capture;
