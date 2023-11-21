import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Netflix",
    img: "/netflix.png",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo exercitationem, quibusdam maxime ipsam reprehenderit, esse distinctio necessitatibus ratione ab rem nesciunt! Rerum porro cumque aut eaque veniam! Labore, optio.",
    link: "https://black-belt4.pages.dev/",
  },

  {
    id: 1,
    title: "React GYM",
    img: "/bbelt.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo exercitationem, quibusdam maxime ipsam reprehenderit, esse distinctio necessitatibus ratione ab rem nesciunt! Rerum porro cumque aut eaque veniam! Labore, optio.",
    link: "https://black-belt4.pages.dev/",
  },

  {
    id: 1,
    title: "Vanilla JS App",
    img: "/optic.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo exercitationem, quibusdam maxime ipsam reprehenderit, esse distinctio necessitatibus ratione ab rem nesciunt! Rerum porro cumque aut eaque veniam! Labore, optio.",
    link: "https://optictvv2.pages.dev/",
  },

  {
    id: 1,
    title: "HTML CSS App",
    img: "/voge.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo exercitationem, quibusdam maxime ipsam reprehenderit, esse distinctio necessitatibus ratione ab rem nesciunt! Rerum porro cumque aut eaque veniam! Labore, optio.",
    link: "https://voge-site.pages.dev/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <motion.h2>{item.title}</motion.h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link}>See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}
export default Portfolio;
