import { useState, React } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Project = ({
  project: { name, description, video, github, githubPages },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isModalOpen) {
    document.body.classList.add("active-modal");
    document.getElementById("hamburger-menu").style.display = "none";
  }

  if (!isModalOpen) {
    document.body.classList.remove("active-modal");
  }

  if (
    !isModalOpen &&
    document.getElementById("hamburger-menu") &&
    window.innerWidth <= 1085
  ) {
    document.body.classList.remove("active-modal");
    document.getElementById("hamburger-menu").style.display = "initial";
    // REFACTOR WITH REF HOOK
  }

  return (
    <div className="project-container">
      <h1 className="project-title">{name}</h1>
      <button
        className="learn-more-button button"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Learn more
      </button>
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              className="modal"
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 0.3 } }}
              exit={{ scale: 0 }}
            >
              <div
                className="overlay"
                onClick={() => setIsModalOpen(!isModalOpen)}
              ></div>
              <div className="modal-content">
                <div className="gif-container">
                  <video src={video} autoPlay loop></video>
                </div>
                <div className="right-side-container">
                  <div className="description-container">
                    <h1 className="description-title">Description:</h1>
                    <div className="description-p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus nesciunt quisquam suscipit iusto ducimus
                      temporibus, fugiat reiciendis voluptatem. Laborum vero
                      voluptatum, earum doloribus nihil praesentium neque
                      corrupti perspiciatis quas eveniet dolorum porro
                      temporibus aspernatur voluptate ull
                    </div>
                  </div>
                  <div className="modal-buttons-container">
                    <form className="project-buttons">
                      <button
                        className="button modal-button"
                        type="submit"
                        formAction={githubPages}
                        formTarget="_blank"
                      >
                        Live site
                      </button>
                    </form>
                    <form className="project-buttons">
                      <button
                        className="button modal-button github-button"
                        type="submit"
                        formAction={github}
                        formTarget="_blank"
                      >
                        Github repo
                      </button>
                    </form>
                  </div>
                </div>
                <div
                  className="close-modal-icon"
                  onClick={() => setIsModalOpen(!isModalOpen)}
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

export default Project;
