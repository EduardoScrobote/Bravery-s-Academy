import { motion } from "framer-motion";
import { Feedbacks } from "./Feedbacks";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useRef, useState } from "react";

function MobileCarousel() {
  const refCarousel = useRef(null);
  const [carouselEffect] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const next = () => {
    if (!isHovered) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      refCarousel.current.scrollLeft += carouselEffect;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (refCarousel.current?.scrollLeft >= 2340) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        refCarousel.current.scrollLeft = 0;
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 30);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselEffect, isHovered]);
  return (
    <div className="min-h-450px flex items-center justify-center">
      <motion.div
        ref={refCarousel}
        className="flex overflow-x-hidden transition duration-800 max-w-[930px]"
      >
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6"
        >
          {Feedbacks.map((prop, i) => (
            <motion.div
              className="w-[350px] max-h-[400px] overflow-y-hidden p-1 pointer-events-none text-white rounded-xl mb-16 bg-braves-secondary"
              key={i}
            >
              <div className="flex bg-transparent w-full h-24 overflow-hidden justify-center items-center gap-8">
                {prop.playerProfile}
                <h1 className="bg-transparent text-[#E7D006] text-2xl text-center">
                  {prop.name}
                </h1>
              </div>
              <div>
                <p className="mt-8 text-sm">{prop.feedback}</p>
              </div>
              <div className="flex gap-8 justify-center items-center mt-8">
                <img
                  src={`/medals/${prop.before}.webp`}
                  alt="crusader-3"
                  className="w-16 h-16"
                />
                <div className="flex flex-col justify-center items-center">
                  <GoArrowRight size={32} />
                </div>
                <img
                  src={`/medals/${prop.after}.webp`}
                  alt="crusader-3"
                  className="w-16 h-16"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MobileCarousel;
