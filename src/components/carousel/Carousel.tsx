import { motion } from "framer-motion";
import { Feedbacks } from "./Feedbacks";
import { GoArrowRight } from "react-icons/go";

import { useEffect, useState, useRef } from "react";

function Carousel() {
  const carousel = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="w-full m-0 min-h-450px flex items-center justify-center">
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="cursor-grab flex overflow-hidden max-w-[930px]"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6"
        >
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
