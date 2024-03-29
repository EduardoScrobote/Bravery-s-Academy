import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="flex w-18 text-lg font-semibold  "
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center gap-2 items-center hover:bg-braves-secondary hover:cursor-pointer hover:scale-110 rounded-md p-2"
      >
        Coach
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <MdOutlineKeyboardArrowDown />
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="absolute mt-10 flex flex-col   ml-2"
      >
        <motion.li
          className="hover:cursor-pointer hover:bg-braves-secondary hover:p-2 duration-300"
          variants={itemVariants}
        >
          <Link to="/coach">Individual</Link>
        </motion.li>
        <motion.li
          className="hover:cursor-pointer hover:bg-braves-secondary hover:p-2 duration-300"
          variants={itemVariants}
        >
          <Link to="/coach/dual">Duplas</Link>
        </motion.li>
        <motion.li
          className="hover:cursor-pointer hover:bg-braves-secondary hover:p-2 duration-300"
          variants={itemVariants}
        >
          <Link to="/coach/teams">Times</Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
