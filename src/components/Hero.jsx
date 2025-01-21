import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ssai.jpg";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {x: 0, opacity: 1, transition:{duration: 0.5, delay: delay}},
})
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-16">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl font-thin tracking-tight 
              lg:mt-16 lg:text-8xl"
            >
              Sai Susanth R
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible" 
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
              bg-clip-text text-3xl font-medium tracking-tight text-transparent"
            >
              React Developer
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 1, delay: 1.2}}
              src={profilePic}
              alt="Sai Susanth R"
              className="rounded-lg shadow-lg w-60 h-60 lg:w-96 lg:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
