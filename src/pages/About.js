import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Titan3 from "../svg/Titan3";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "50vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const About = () => {
  return (
    <motion.div
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>About</h1>
      <div className="about-desc">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
          ea quidem ratione, quae officiis nostrum tempora voluptate laborum
          nobis tempore velit unde explicabo voluptatum minus. Asperiores, rem
          sapiente accusantium facere iusto quia nulla, eveniet vitae maxime
          voluptate quos, eaque tempore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis, ratione laboriosam? Voluptatum eum alias
          asperiores. Nisi quas officiis explicabo iste, repellendus beatae
          magni amet molestiae vero soluta voluptatum id eaque nulla quibusdam
          dignissimos est doloribus ipsum quae delectus consequatur asperiores!
        </p>
        <Titan3 />
      </div>

      <motion.h1
        initial={{ y: -10 }}
        animate={{
          y: 10,
          transition: {
            duration: 1,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        <Link className="link" to="/newsletter">
          &#8659;
        </Link>
      </motion.h1>
    </motion.div>
  );
};

export default About;
