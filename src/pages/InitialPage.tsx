import Capture from "../components/CapturePage";
import Benefits from "../components/Benefits";
import Carousel from "../components/carousel/Carousel";
import Bravery from "../components/coachs/Bravery/Bravery";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import useBreakPoint, { BreakPoint } from "../hooks/useBreakingPoints";
import MobileCapture from "../components/MobileCapturePage";
import MobileBenefits from "../components/MobileBenefits";
import MobileCarousel from "../components/carousel/MobileCarousel";
import MobileBravery from "../components/coachs/Bravery/MobileBravery";
import MobileFooter from "../components/MobileFooter";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function InitialPage() {
  const [openHamburguer, setOpenHamburguer] = useState<boolean>(false);
  const breakingPoint = useBreakPoint();
  if (
    [BreakPoint.MOBILE, BreakPoint.TABLET].includes(breakingPoint) &&
    openHamburguer == true
  ) {
    return (
      <motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full p-8 h-screen flex flex-col"
        >
          <div
            onClick={() => setOpenHamburguer(false)}
            className="w-full ml-8 flex justify-between"
          >
            <RxHamburgerMenu size={"48px"} color="white" />
          </div>
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-screen flex flex-col gap-8 justify-center items-center"
          >
            <Link className="text-white text-[32px]" to="/">
              Inicio
            </Link>
            <Link className="text-white text-[32px]" to="/coach">
              Coach
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  } else if (
    [BreakPoint.MOBILE, BreakPoint.TABLET].includes(breakingPoint) &&
    openHamburguer == false
  ) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center"
      >
        <div
          onClick={() => setOpenHamburguer(true)}
          className="w-full ml-8 h-16 rounded-full flex absolute top-10"
        >
          <RxHamburgerMenu size={"64px"} color="white" />
        </div>
        <MobileCapture />
        <MobileBenefits />
        <div className="w-full mt-[100px] items-center flex flex-col">
          <h1 className="mb-32 text-braves-red text-[32px] mt-44 font-bold">
            Feedback dos Bravos
          </h1>
          <MobileCarousel />
        </div>
        <MobileBravery />
        <MobileFooter />
      </motion.div>
    );
  }

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
