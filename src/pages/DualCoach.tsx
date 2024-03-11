import { motion } from "framer-motion";
import Header from "../components/Header";
import Button from "../components/Button";

function Coach() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header background="bg-coach-bg" brightness="brightness-[0.3]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full h-screen flex justify-center items-center"
      >
        <motion.div className="w-[975px] flex justify-center text-white">
          <div className="w-full flex flex-col">
            <h1 className="w-[36rem] text-[28px] font-bold">
              No serviço de Coaching Dual, o professor Bravery irá ministrar a
              aula em dupla, onde iremos trabalhar diretamente na dificuldade e
              na melhoria da gameplay da dual da Safe Lane ou Off Lane com
              analise de replays e aulas práticas, onde irei ditar o ritmo do
              jogo.
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
