import { motion } from "framer-motion";
import Button from "../../Button";
function Bravery() {
  return (
    <div className="w-full mt-32 flex flex-col p-12 gap-16 justify-center items-center">
      <img
        src="/igor-cabeca-quadrada.jpg"
        alt="foto do coach bravery"
        className="rounded-full w-[8rem] h-[8rem] bg-cover scale-[2]"
      />
      <motion.p
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl text-[#E7D006] mt-16"
      >
        Igor "Bravery" Carvalho
      </motion.p>
      <p className="text-white w-[28rem] text-2xl">
        Coach profissional de Dota 2 desde 2022, já alcançou{" "}
        <span className="text-[#E7D006] font-bold">7.000 MMR</span> e levou
        diversos alunos até os ranks mais altos,{" "}
        <span className="text-[#E7D006] font-bold">
          com alunos batendo a média de 6.000 MMR
        </span>
      </p>
      <Button />
    </div>
  );
}

export default Bravery;
