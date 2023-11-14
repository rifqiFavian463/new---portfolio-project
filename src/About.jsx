import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { motion } from "framer-motion";
import { transition1, transition2 } from "./transition";

function About() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.9,
        staggerChildren: 0.3,
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.9,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="absolute w-[30%] bg-waves bg-top bg-cover h-[100%] right-0 mix-blend-difference"
      >
        <motion.h1
          layout
          layoutId="unique-id"
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-50%" }}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="absolute h1 mix-blend-difference -left-40 md:text-[100px] md:-left-80 lg:-left-60 top-10 border-b-4 border-solid"
        >
          About Me
        </motion.h1>
      </motion.div>
      <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="w-[290px] pt-40 ms-16 lg:ms-20 me-20 md:w-[450px] lg:w-[780px] md:pt-60 lg:pt-60">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition1} className="font-secondary text-white text-sm text-justify md:text-xl">
          Hello, Perkenalkan saya Rifqi Favian Hibatullah, seorang mahasiswa aktif yang sedang melaksanakan studi di Universitas Muhammadiyah Prof. Dr. HAMKA. saya telah memiliki pengalaman satu tahun
          di bidang pembuatan website, khususnya dalam bidang Front-End Website, dapat bekerja baik dalam tim dan berkeinginan kuat menjadi seorang Fullstack Developer.
        </motion.p>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h1 text-3xl mt-10">
          Skills
        </motion.h1>
        <motion.div variants={container} initial="hidden" animate="show" exit="out" className="flex gap-4 lg:gap-x-4 skill-list w-[200px] md:w-[450px] lg:w-[500px] flex-wrap mt-6">
          <motion.i variants={container} className="devicon-html5-plain-wordmark text-[40px]"></motion.i>
          <motion.i variants={container} className="devicon-css3-plain-wordmark text-[40px]"></motion.i>
          <motion.i variants={container} className="devicon-javascript-plain text-[40px]"></motion.i>
          <motion.i variants={container} className="devicon-sass-original text-[40px]"></motion.i>
          <motion.i variants={container} className="devicon-bootstrap-plain-wordmark text-[40px]"></motion.i>
          <motion.i variants={container} className="devicon-tailwindcss-plain text-[40px]"></motion.i>
          <motion.i variants={container} className="devicon-jquery-plain-wordmark text-[40px]"></motion.i>
          <motion.i variants={container} className="devicon-react-original text-[40px]"></motion.i>
          <motion.i variants={container} className="devicon-nodejs-plain text-[40px]"></motion.i>
          <motion.i variants={container} className="devicon-express-original-wordmark text-[40px]"></motion.i>
          <motion.i variants={container} className="devicon-git-plain text-[40px]"></motion.i>
          <motion.i variants={container} className="devicon-mysql-plain-wordmark text-[40px]"></motion.i>
          <motion.i variants={container} className="devicon-mongodb-plain-wordmark text-[40px]"></motion.i>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
