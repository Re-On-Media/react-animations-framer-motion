import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const modalVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
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
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          className="form"
        >
          <input type="hidden" name="form-name" value="form-ch" />
          <div>
            <label htmlFor="">Name</label> <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="">Enter your email</label>
            <input type="text" name="email" />
          </div>
          <div>
            <label className="msg" htmlFor="">
              Message
            </label>
            <textarea name="message" id=""></textarea>
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
