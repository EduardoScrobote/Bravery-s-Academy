import { motion } from "framer-motion";
import { Feedbacks } from "./Feedbacks";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useRef } from "react";

function Carousel() {
  const refCarousel = useRef(null);

  const next = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    refCarousel.current.scrollLeft += 1;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (refCarousel.current?.scrollLeft >= 1416) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      refCarousel.current.scrollLeft = 0;
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
      // Função que será executada a cada 1 segundo
    }, 30); // Intervalo de 1 segundo

    return () => {
      clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    };
  }, []);

  return (
    <div className="w-full m-0 min-h-450px flex items-center justify-center">
      <motion.div
        ref={refCarousel}
        className=" flex overflow-x-hidden transition duration-800 max-w-[930px]"
      >
        <motion.div className="flex gap-6">
          {Feedbacks.map((prop, i) => (
            <motion.div
              className="w-[450px] p-4 pointer-events-none text-white rounded-xl mb-16 bg-[#51504e]"
              key={i}
            >
              <div className="flex bg-transparent w-full h-24 overflow-hidden justify-center items-center gap-8">
                {prop.playerProfile}
                <h1 className="bg-transparent text-[#E7D006] text-2xl text-center">
                  {prop.name}
                </h1>
              </div>
              <div>
                <p className="mt-8 text-lg">{prop.feedback}</p>
              </div>
              <div className="flex gap-8 justify-center items-center mt-8">
                <img
                  src={`/medals/${prop.before}.webp`}
                  alt="crusader-3"
                  className="w-24 h-24"
                />
                <div className="flex flex-col justify-center items-center">
                  <GoArrowRight size={32} />
                </div>
                <img
                  src={`/medals/${prop.after}.webp`}
                  alt="crusader-3"
                  className="w-24 h-24"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carousel;
