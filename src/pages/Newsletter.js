import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "../components/Modal";

const containerVariants = {
  hidden: {
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
    transition: { ease: "easeInOut" },
  },
};

const Newsletter = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      className="newsletter-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>¿Desea recibir más información?</h1>
      <div>
        <button
          className="newsletter-button"
          onClick={() => setShowModal(true)}
        >
          Sí, deseo saber más
        </button>
        <Link className="link" to="/">
          <button className="newsletter-button">No, llevame a la home</button>
        </Link>
      </div>
      <Modal showModal={showModal} />
    </motion.div>
  );
};

export default Newsletter;