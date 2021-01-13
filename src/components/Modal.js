import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  show: {
    x: "0vw",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal }) => {
  return (
    <>
      {showModal && (
        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="form"
        >
          <div>
            <label htmlFor="">Name</label> <input type="text" />
          </div>
          <div>
            <label htmlFor="">Enter your email</label>
            <input type="text" />
          </div>
          <div>
            <label className="msg" htmlFor="">
              Message
            </label>
            <textarea className="txt-area"></textarea>
          </div>
          <Link className="link" to="/">
            <button className="form-button">Submit</button>
          </Link>
        </motion.form>
      )}
    </>
  );
};

export default Modal;
