import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Colosal from "../components/Colosal";
import Logo from "../components/Logo";
import "../App.css";

//Animate
//Initial: The initial state of an element
//Animate
//Transition: delay, duration, type: spring(default) {stiffness: only for spring. Hte higher, the higher it bounces}, tween (seco)
//whileHover

//VARIANTS:
//They allow us to extract our state to an external object making clear our code.
//They allows to propagate changes
//Timing relationships between parent - child motions.
//When we have a parent element with variants, they propagate to the children. We don't need to explicitly declare hidden visible,
//only the variants

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: "-100vh", transition: { ease: "easeInOut", duration: 0.5 } }}
    >
      <Logo />
      <Colosal />
      <motion.h1
        initial={{ y: -10 }}
        animate={{
          y: 10,
          transition: {
            duration: 1,
            ease: "easeIn",
            repeat: Infinity,
            //loop, reverse, mirror
            repeatType: "reverse",
          },
        }}
        className="arrow-down"
      >
        <Link className="link" to="/about">
          &#8659;
        </Link>
      </motion.h1>
    </motion.div>
  );
};

export default Home;
