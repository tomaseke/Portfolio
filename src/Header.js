import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  if (isContactOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  function handleChange(e) {
    this.setState({ value: e.target.value });
  }

  return (
    <div>
      <header>
        <div className="nav-container">
          <ul>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#projects">
              <li>Portfolio</li>
            </a>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => setIsContactOpen(!isContactOpen)}
            >
              Contact
            </li>
          </ul>
        </div>
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
    </div>
  );
};

export default Header;
