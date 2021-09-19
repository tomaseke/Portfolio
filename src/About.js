import { React, useState } from "react";
import CV from "./CV.pdf";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  if (isContactOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="section about-section">
      <h1 id="about">ABOUT ME</h1>
      <hr id="about-hr" />
      <section className="about-container">
        <div className="p-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            dolore laboriosam quibusdam sit! Esse incidunt repellendus est?
            Aliquam explicabo, exercitationem ratione sed dignissimos
            praesentium velit nostrum culpa nisi atque suscipit blanditiis
            perspiciatis totam, laudantium consequuntur cupiditate minima facere
            fugiat aut? Aliquam optio eveniet possimus, quis inventore
            voluptatem! Eveniet, saepe atque.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            veniam numquam itaque nemo autem obcaecati nisi molestias at
            delectus vero? Tempora quae eligendi maiores aliquid laudantium
            unde! Deserunt officia unde, autem animi quae illo laboriosam
            laborum, ullam nobis distinctio provident!
          </p>
        </div>
        <div id="about-buttons-container">
          <button
            className="about-buttons button"
            onClick={() => setIsContactOpen(!isContactOpen)}
          >
            Contact me
          </button>
          <button className="about-buttons button">
            <a href={CV} target="_blank" className="a-buttons">
              Download CV
            </a>
          </button>
        </div>
      </section>
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
    </div>
  );
};

export default About;
