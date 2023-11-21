import { motion } from "framer-motion";
import "./hero.scss";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollbutton: {
    opacity: 0,
    y: 10,

    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },

  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="textContainer"
        >
          <motion.h2 variants={textVariants}>Mostafa Bouhanout</motion.h2>
          <motion.h1 variants={textVariants}>
            Front End Devloper and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="https://github.com/Strox7">See the Latest Works</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="https://www.linkedin.com/in/mostafa-bouhanout-4a2656298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                Contact Me
              </a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollbutton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
}
export default Hero;
