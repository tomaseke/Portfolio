import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./App.css";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  let hamburgerColor, headerDisplay;

  if (isContactOpen) {
    document.body.classList.add("active-modal");
    document.getElementById("hamburger-menu").style.display = "none";
  }
  if (!isContactOpen && document.getElementById("hamburger-menu")) {
    document.body.classList.remove("active-modal");
    document.getElementById("hamburger-menu").style.display = "initial";
    // REFACTOR THIS WITH REF
  }

  if (isHamburgerOpen && window.innerWidth < 1085) {
    hamburgerColor = { color: "white" };
    headerDisplay = { display: "initial" };
  }
  if (!isHamburgerOpen && window.innerWidth < 1085) {
    hamburgerColor = { color: "black" };
    headerDisplay = { display: "none" };
  }

  return (
    <>
      <div
        id="hamburger-menu"
        style={hamburgerColor}
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      >
        ☰
      </div>
      <header id="header" style={headerDisplay}>
        <ul>
          <a href="#about" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
            <li className="hamburger-menu-border">About</li>
          </a>
          <a
            href="#projects"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            <li>Portfolio</li>
          </a>
          <a onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
            <li
              className="hamburger-menu-border hamburger-menu-border-bottom"
              style={{ cursor: "pointer" }}
              onClick={() => setIsContactOpen(!isContactOpen)}
            >
              Contact
            </li>
          </a>
        </ul>
      </header>
      <AnimatePresence>
        {isContactOpen && (
          <>
            <motion.div
              className="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0 }}
            >
              <div
                className="overlay"
                onClick={() => setIsContactOpen(!isContactOpen)}
              ></div>
              <div className="modal-content-contact">
                <div className="form-container">
                  <h1 className="h1-contact">Contact Form</h1>
                  <form
                    action="https://formsubmit.co/e8b11cfa3bc23dbcc2135c3b6cfc4dd0"
                    method="POST"
                  >
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" required></textarea>
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Thanks for contacting me! I will get to you as soon as possible."
                    />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://tomaseke.github.io/Portfolio/"
                    />
                    <button className="button send-button">SEND</button>
                  </form>
                </div>
                <div
                  className="close-modal-icon"
                  onClick={() => setIsContactOpen(!isContactOpen)}
                >
                  &#10006;
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
