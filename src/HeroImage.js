import React from "react";
import hero_image from "./hero-image-3.jpg";
import CV from "./CV.pdf";

const HeroImage = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1920 1080"
    >
      <image width="1920" height="1080" xlinkHref={hero_image}></image>
      <a xlinkHref={CV} target="_blank">
        <rect
          x="812"
          y="926"
          fill="#fff"
          opacity="0"
          width="254"
          height="69"
        ></rect>
      </a>
      <a xlinkHref="mailto:erbentomas@seznam.cz">
        <rect
          x="735"
          y="606"
          fill="#fff"
          opacity="0"
          width="121"
          height="92"
        ></rect>
      </a>
      <a
        xlinkHref="https://www.linkedin.com/in/tomas-erben-568873209/"
        target="_blank"
      >
        <rect
          x="895"
          y="601"
          fill="#fff"
          opacity="0"
          width="102"
          height="102"
        ></rect>
      </a>
      <a xlinkHref="https://github.com/tomaseke" target="_blank">
        <rect
          x="1035"
          y="603"
          fill="#fff"
          opacity="0"
          width="102"
          height="100"
        ></rect>
      </a>
    </svg>
  );
};

export default HeroImage;
