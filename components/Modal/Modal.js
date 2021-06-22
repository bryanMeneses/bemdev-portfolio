import React from "react";
import styles from "./Modal.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { fadeInDown, fadeIn } from "@/animations/index";

const Modal = ({ closeModal, active, content }) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 0.3 }}
          className={styles.modal}
        >
          <motion.div
            // variants={fadeInDown}
            // initial="hidden"
            // animate="show"
            // exit="hidden"
            transition={{ duration: 0.3 }}
            className={styles.wrapper}
          >
            <div className={styles.content}>
              <header>
                <button className="block mb-2 ml-auto" onClick={closeModal}>
                  <FontAwesomeIcon
                    className="w-8"
                    color="black"
                    icon={faTimesCircle}
                  />
                </button>
              </header>
              <div>{content}</div>
              <footer></footer>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
