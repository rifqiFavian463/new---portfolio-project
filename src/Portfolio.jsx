import { useContext } from "react";
import CardImage1 from "./assets/card-image1.png";
import CardImage2 from "./assets/card-image2.png";
import CardImage3 from "./assets/card-image3.png";
import CardImage4 from "./assets/card-image-4.png";
import CardImage5 from "./assets/card-image5.png";
import CardImage6 from "./assets/card-image6.png";

import { motion } from "framer-motion";
import { CursorContext } from "./CursorContext";
import { transition1 } from "./transition";

function Portfolio() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const cards = [
    {
      image: CardImage1,
      title: "Teknoka 8 Website",
      techStack: "Codeigniter, Jquery, Bootstrap",
      description:
        "Teknoka 8 merupakan sebuah website seminar yang menangani proses publikasi ilmiah berupa jurnal, terdapat fitur submit, review jurnal. Pada project ini saya bekerja sebagai maintenance Front-End Developer untuk memperbarui informasi pada website, serta memperbarui assets yang bersangkutan dengan Teknoka 8.",
      liveDemo: "https://teknoka.uhamka.ac.id/",
    },
    {
      image: CardImage2,
      title: "Jago-Investasi Website",
      techStack: "Laravel, Jquery, Bootstrap",
      description:
        "Jago-Investasi merupakan sebuah website pembelajaran berupa course berbayar yang diperuntukan untuk mahasiswa FEB UHAMKA. Pada project ini saya bekerja sebagai Front-End developer yang turut serta membantu kesulitan pada Back-End Developer.",
      liveDemo: "https://www.jago-investasi.com/",
    },
    {
      image: CardImage3,
      title: "Amazon App",
      techStack: "React JS, Tailwindcss, Framer-Motion",
      description:
        "Amazon website merupakan e-commerce website yang berisi produk-produk kecantikan, pada project ini saya bekerja sebagai Front-End Developer menggunakan framework React JS serta Framer-Motion dalam mengaplikasikan animasi.",
      liveDemo: "https://rifqifavian463.github.io/Amazon-E-Commerce-Web/",
    },
    {
      image: CardImage4,
      title: "Yoasobi Website",
      techStack: "HTML5, CSS, Vanilla JS",
      description:
        "Yoasobi website merupakan sebuah website artikel yang berkaitan dengan Yoasobi group, website ini merupakan submission hasil pembelajaran dari dicoding kelas 'Belajar dasar Pemrograman Web'.",
      liveDemo: "https://rifqifavian463.github.io/submission-dicoding-Belajar-dasar-pemrograman-web/",
    },
    {
      image: CardImage5,
      title: "Bookshelf App",
      techStack: "HTML5, CSS, Vanilla JS",
      description:
        "Bookshelf App merupakan website submission hasil pembelajaran dari dicoding di kelas 'Belajar membuat front-end web untuk pemula'. Website ini memiliki fitur create,read,update dan delete.",
      liveDemo: "https://rifqifavian463.github.io/submission-dicoding-Belajar-membuat-front-end-web-untuk-pemula/",
    },
    {
      image: CardImage6,
      title: "Staycation. Website",
      techStack: "HTML5, CSS, Vanilla JS",
      description: "Staycation. website merupakan sebuah travel app, saya mengaplikasikan design dari BuildWithAngga. menjadi sebuah tampilan website.",
      onGithub: "https://github.com/rifqiFavian463/Home-Page-Web-Travel",
    },
  ];
  return (
    <div>
      <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="w-[100%] h-[150px] bg-waves bg-cover bg-top"
      >
        <motion.h1
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-50%" }}
          transition={transition1}
          className="h1 absolute top-[103px] mix-blend-difference left-20"
        >
          Portfolio
        </motion.h1>
      </motion.div>
      <div className="flex flex-wrap gap-x-9 gap-y-9 justify-center card-container w-100 ps-20 pe-10 mt-16 lg:mt-28 mb-10">
        {cards.map((card, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={transition1}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="card w-[280px] bg-white"
              key={i}
            >
              <img src={card.image} alt="card-image" />
              <div className="text p-5 pt-4">
                <h4 className="h1 text-lg  text-primary font-primary">{card.title}</h4>
                <span className="font-secondary text-primary text-[12px] font-bold">Tech Stack : {card.techStack}</span>
                <p className="font-secondary text-primary text-[12px] mt-2">{card.description}</p>
                {card.liveDemo ? (
                  <a href={card.liveDemo}>
                    <button className="mt-7 bg-primary text-white text-[12px] px-[20px] font-secondary py-[8px]">Live demo</button>
                  </a>
                ) : null}
                {card.onGithub ? (
                  <a href={card.liveDemo}>
                    <button className="mt-7 bg-primary text-white text-[12px] px-[20px] font-secondary py-[8px]">On github</button>
                  </a>
                ) : null}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
