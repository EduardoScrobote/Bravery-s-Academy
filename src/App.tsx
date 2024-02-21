import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Bravery from "./components/coachs/Bravery/Bravery";
import "./App.css";
import Carousel from "./components/carousel/Carousel";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="w-full h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 8 }}
        className="w-full h-[75%] flex bg-no-repeat justify-end bg-cover bg-center bg-main-bg"
      >
        <div className="flex h-24 w-14 items-center justify-center bg-transparent hover:cursor-pointer">
          <FaWhatsapp
            color="green"
            size={46}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </div>
        <div className="flex h-24 w-24 items-center justify-center bg-transparent hover:cursor-pointer">
          <FaInstagram
            color="#fa574f"
            size={46}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </div>
      </motion.div>
      <div className="flex flex-col">
        <div className="w-full flex justify-center items-center">
          <p className="text-white text-3xl">
            Alcance o <span className="text-[#E7D006] font-bold">MMR</span> dos
            seus sonhos com a Bravery`s Academy!
          </p>
          <img
            src="IMMORTAL.png"
            alt="flag-immortal"
            width={300}
            height={80}
            className="mt-8"
          />
        </div>
      </div>
      <Bravery />
      <Carousel />
    </div>
  );
}

export default App;
