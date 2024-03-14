import { motion } from "framer-motion";
import Header from "../components/Header";
import Button from "../components/Button";
import useBreakPoint, { BreakPoint } from "../hooks/useBreakingPoints";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function Coach() {
  const breakingPoint = useBreakPoint();
  const [openHamburguer, setOpenHamburguer] = useState<boolean>(false);

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
            className="w-full flex justify-between"
          >
            <IoClose size={"48px"} color="white" />
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
  }

  if (
    [BreakPoint.MOBILE, BreakPoint.TABLET].includes(breakingPoint) &&
    openHamburguer === false
  ) {
    return (
      <div className="w-ful h-screen flex flex-col">
        <div className="w-full -z-10 absolute bg-coach-bg brightness-50 bg-cover bg-no-repeat h-screen"></div>
        <div
          onClick={() => setOpenHamburguer(true)}
          className="w-full ml-8 h-16 rounded-full flex absolute top-10"
        >
          <RxHamburgerMenu size={"32px"} color="white" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-screen flex justify-center items-center"
        >
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center text-white"
          >
            <div className="w-full flex flex-col">
              <h1 className="text-[22px] font-bold">
                No serviço de Coaching, o professor Bravery irá ministrar uma
                aula didática(Analise de Replay){" "}
                <span className="text-braves-red">
                  focada em aprimorar sua gameplay
                </span>{" "}
                e mindset, te ajudando a corrigir seus erros. Cada aula tem
                duração aproximada de 1h-1h10min e é realizada via Discord.
              </h1>
              <div className="mt-12">
                <Button
                  text="Quero minha aula"
                  width="w-[16rem]"
                  height="h-[3rem]"
                  m="ml-4"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="w-full h-screen flex flex-col">
      <Header background="bg-coach-bg" brightness="brightness-[0.3]" />
      <motion.div
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-screen flex justify-center items-center"
      >
        <motion.div className="w-[975px] flex justify-center text-white">
          <div className="w-full flex flex-col">
            <h1 className="w-[36rem] text-[28px] font-bold">
              No serviço de Coaching, o professor Bravery irá ministrar uma aula
              didática(Analise de Replay){" "}
              <span className="text-braves-red">
                focada em aprimorar sua gameplay
              </span>{" "}
              e mindset, te ajudando a corrigir seus erros. Cada aula tem
              duração aproximada de 1h-1h10min e é realizada via Discord.
            </h1>
            <div className="mt-12">
              <Button
                text="Quero minha aula"
                width="w-[16rem]"
                height="h-[3rem]"
                m="ml-4"
              />
            </div>
          </div>
          <div className="w-64 h-64 "></div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Coach;
