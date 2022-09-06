import React from "react";
import { StyledHome } from "../styled/StyledHome";
import github from "../../utils/img/github.png";
import linkedin from "../../utils/img/linkedin.png";
import whatsapp from "../../utils/img/whatsapp.png"; 
import { links } from "../../utils/links";
import strings from "./language.js";
 import es from "../../utils/resume/es.pdf"
 import en from "../../utils/resume/en.pdf"

export default function Home({ language, dark }) {
  const resumes = { en, es };

  return (
    <StyledHome id="Home" dark={dark}>
      <div className="social">
        <a href={links.github}>
           <img src={github} alt="github logo" className="icon" /> 
        </a>
        <a href={links.linkedin}>
          <img src={linkedin} alt="linkedin logo" className="icon" /> 
        </a>
        <a href={links.whatsapp}>
          <img src={whatsapp} alt="whatsapp logo" className="icon" /> 
        </a>
      </div>
      

      <div className="presentation">
        <h1>
          {strings[language].title.split("").map((char, i) => (
            <span className="title name" key={char + i}>
              {char}
            </span>
          ))}
        </h1>
        <h2 className="subtitle">{strings[language].subtitle}</h2>
        <p className="data">
          {strings[language].data.map((el, i) => (
            <span key={language + i}>
              {el}
              <br />
            </span>
          ))}
        </p>
         <a href={resumes[language]} download={true} className="button">
          {strings[language].resume}
        </a> 
      </div>

      <span className="openTag">{"<Portfolio>"}</span>
    </StyledHome>
  );
}