import { useContext } from "react";
import ProfileImage from "./assets/profile-image.jpeg";
import { CursorContext } from "./CursorContext";
import { motion } from "framer-motion";
import { transition1, transition2 } from "./transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

function Profile() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 5,
        staggerChildren: 0.5,
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };
  const kodomo = {
    hidden: {
      x: "300px",
    },
    show: {
      x: 0,
      transition: transition1,
    },
    out: {
      x: "300px",
      transition: transition1,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="relative flex h-[100vh] overflow-hidden pt-14 md:pt-36 lg:pt-0 lg:items-center md:mt-0 "
    >
      <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="wrapper ms-20 md:ms-28">
        <motion.h1 initial={{ opacity: 0, y: "-50%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-50%" }} transition={transition1} className="h1 md:text-[108px] lg:text-[100px]">
          Front-End Web <br /> Developer
        </motion.h1>
        <motion.p className="text-[26px] font-primary mt-3">Bekasi, Indonesia</motion.p>
        <button className="btn mt-7 relative z-20">Download CV</button>
        <motion.div variants={container} initial="hidden" animate="show" exit="out" className="social-list absolute flex flex-col md:right-[33em] gap-y-3 md:gap-y-6 lg:gap-y-3 bottom-10 md:bottom-10">
          <span className="font-secondary lg:[writing-mode:vertical-lr] lg:-rotate-180">
            social <div className="h-[3px] w-[150px] relative z-50 lg:h-[150px] lg:w-[2px] bg-white"></div>
          </span>
          <motion.a variants={kodomo} href="https://www.linkedin.com/in/rifqi-favian-hibatullah-61a485261/">
            <FontAwesomeIcon icon={faInstagram} className="text-3xl lg:text-3xl md:text-[48px] cursor-pointer" />
          </motion.a>
          <motion.a variants={kodomo} href="https://www.linkedin.com/in/rifqi-favian-hibatullah-61a485261/">
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl lg:text-3xl md:text-[48px] cursor-pointer" />
          </motion.a>
          <motion.a variants={kodomo} href="https://www.linkedin.com/in/rifqi-favian-hibatullah-61a485261/">
            <FontAwesomeIcon icon={faTwitter} className="text-3xl lg:text-3xl md:text-[48px] cursor-pointer" />
          </motion.a>
          <motion.a variants={kodomo} href="https://www.linkedin.com/in/rifqi-favian-hibatullah-61a485261/">
            <FontAwesomeIcon icon={faGithub} className="text-3xl lg:text-3xl md:text-[48px] cursor-pointer" />
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.img
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        initial={{ opacity: 0, scale: 0 }}
        // whileHover={{ scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={transition1}
        src={ProfileImage}
        alt="profile-image"
        className="absolute w-[80%] -right-14 -bottom-[40px] md:w-[75%] lg:w-[45%] md:-bottom-40 md:-right-28"
      />
    </motion.div>
  );
}

export default Profile;
