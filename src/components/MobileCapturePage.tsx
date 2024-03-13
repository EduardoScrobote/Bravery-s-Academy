import { motion } from "framer-motion";
import MobileHeader from "./MobileHeader";

function MobileCapture() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full h-screen"
    >
      <motion.div className="h-[100vh] flex flex-col justify-center text-white">
        <MobileHeader background="bg-main-bg" brightness="brightness-[0.5]" />
        <div className="h-screen flex text-center items-end mb-96">
          <h1 className="w-[42rem] font-bold text-[44px]">
            Alcance o <span className="text-braves-red">MMR</span> dos seus
            sonhos com a{" "}
            <span className="text-braves-red">Bravery`s Academy!</span>
          </h1>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MobileCapture;
