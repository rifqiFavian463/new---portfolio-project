import React, { useContext } from "react";
import { transition1 } from "./transition";
import { motion } from "framer-motion";
import { CursorContext } from "./CursorContext";

function Academy() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        staggerChildren: 0.9,
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 2,
        staggerChildren: 0.9,
      },
    },
  };
  const kodomo = {
    hidden: {
      x: "-2000px",
    },
    show: {
      x: 0,
      transition: transition1,
    },
    out: {
      x: "-1000px",
      transition: transition1,
    },
  };
  const kodomo2 = {
    hidden: {
      x: "2000px",
    },
    show: {
      x: 0,
      transition: transition1,
    },
    out: {
      x: "1000px",
      transition: transition1,
    },
  };
  return (
    <div>
      <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="w-100 h-[200px] bg-waves2 bg-cover bg-top mix-blend-difference"
      >
        <motion.h1
          initial={{ opacity: 0, x: "400px" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "400px" }}
          transition={transition1}
          className="absolute -right-0 text-[50px] w-[300px] top-28 lg:right-20 lg:top-10 h1 mix-blend-difference lg:text-[106px] lg:w-[600px]"
        >
          Certificate & Education
        </motion.h1>
      </motion.div>
      <section onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="grid grid-rows-2">
        <motion.div variants={container} initial="hidden" animate="show" exit="out" className="certificate-list ps-20 pe-10 pt-20">
          <div className="certificates flex items-center gap-x-3">
            <h5 className="h1 text-xl font-secondary">Certificates</h5>
            <div className="w-[100%] h-[2px] bg-white"></div>
          </div>
          <span className=" font-secondary text-sm ">List sertifikat web programming</span>
          {/* sertif list */}
          <motion.div variants={kodomo} className="bg-white p-3 mt-4" whileHover={{ scale: 1.02 }} transition={transition1}>
            <motion.h4 className="h1 text-lg text-primary">Belajar Dasar Pemrograman Web</motion.h4>
            <motion.span className="text-primary font-secondary text-sm font-bold ">Dicoding 2023</motion.span>
            <a href="https://www.dicoding.com/certificates/JMZV1474JXN9">
              <motion.button className="ms-2 bg-primary text-white text-[12px] px-[20px] font-secondary py-[8px]">Check Credential</motion.button>
            </a>
          </motion.div>
          <motion.div variants={kodomo} className="bg-white p-3 mt-4 " whileHover={{ scale: 1.02 }} transition={transition1}>
            <motion.h4 className="h1 text-lg text-primary">Belajar Membuat Front-End Web untuk Pemula</motion.h4>
            <motion.span className="text-primary font-secondary text-sm font-bold ">Dicoding 2023</motion.span>
            <a href="https://www.dicoding.com/certificates/4EXG41E0DPRL">
              <motion.button className="ms-2 bg-primary text-white text-[12px] px-[20px] font-secondary py-[8px]">Check Credential</motion.button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="show" exit="out" className="education ps-20 pe-10 pt-10">
          <motion.div className="certificates flex items-center gap-x-3">
            <h5 className="h1 text-xl font-secondary">Education</h5>
            <div className="w-[100%] h-[2px] bg-white"></div>
          </motion.div>

          {/* academy list */}
          <motion.div variants={kodomo2} className="bg-white p-3 mt-4" whileHover={{ scale: 1.02 }} transition={transition1}>
            <h4 className="h1 text-lg text-primary">Madrasah Aliyah Nur El-Ghazy</h4>
            <span className="text-primary font-secondary text-sm font-bold ">Bekasi, 2021</span>
          </motion.div>
          <motion.div variants={kodomo2} className="bg-white p-3 mt-4" whileHover={{ scale: 1.02 }} transition={transition1}>
            <h4 className="h1 text-lg text-primary">Teknik Informatika, Universitas Muhammadiyah Prof. Dr. HAMKA</h4>
            <span className="text-primary font-secondary text-sm font-bold ">Jakarta Timur, Now</span>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Academy;
