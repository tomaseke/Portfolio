import { React, useState } from "react";
import CV from "./CV.pdf";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  if (isContactOpen) {
    document.body.classList.add("active-modal");
    // document.getElementById("hamburger-menu").style.display = "none";
  }
  if (
    !isContactOpen
    // document.getElementById("hamburger-menu") &&
    // window.innerWidth < 1085
  ) {
    document.body.classList.remove("active-modal");
    // document.getElementById("hamburger-menu").style.display = "initial";
    // REFACTOR THIS WITH REF HOOK
  }

  return (
    <div className="section about-section">
      <h1 id="about">ABOUT ME</h1>
      <hr id="about-hr" />
      <section className="about-container">
        <div className="p-container">
          <p>
            I'm a self-taught frontend developer. I have a proficient
            understanding of HTML, CSS and Javascript and I love learning new
            tools and technologies that improve my efficiency as a developer (as
            one of my favorite quote says "To a man with hammer, everything
            looks like a nail."). At the time of writing, I am improving my
            knowledge of React and a little bit of Node and Express to better
            understand the frontend-backend dynamic. I am also on my ongoing
            quest to write short yet readable code.
            <br />
            <br />I believe in effective communication, honesty and
            adaptability. I love to brainstorm possible ideas with others,
            however I can also crack problems on my own. I like to travel, play
            any kind of sport and create new things.
          </p>
        </div>
        <div id="about-buttons-container">
          <button
            className="about-buttons button"
            onClick={() => setIsContactOpen(!isContactOpen)}
          >
            Contact me
          </button>
          <form action={CV} method="get" target="_blank" id="download-cv-form">
            <button className="button a-buttons download-cv-button">
              Download CV
            </button>
          </form>
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
