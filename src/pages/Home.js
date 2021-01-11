import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Collosal from "../svg/Collosal";
import Logo from "../svg/Logo";
import "../App.css";

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: "-100vh", transition: { ease: "easeInOut", duration: 1 } }}
    >
      <Logo />
      <Collosal />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2, delay: 4 } }}
        className="arrow-container"
      >
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
          className="arrow-down"
        >
          <Link className="link" to="/about">
            &#8659;
          </Link>
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default Home;
