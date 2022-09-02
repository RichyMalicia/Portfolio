import React from "react";
import { StyledProjects } from "../styled/StyledProjects";
import github from "../../utils/img/github.png";
import arrow from "../../utils/img/arrow.png";
import projectsList from "./projectList";
 import string from "./language.js"; 

export const Projects = ({ language }) => {
  return (
    <StyledProjects id="Projects">
      <span className="openTag">{"<Projects>"}</span>
      <ul>
        {projectsList.map((el) => {
          return (
            <li key={el.id}>
              <img src={el.img} alt="Web Preview" className="preview" />
              <div className="data">
                <div>
                  {el.title.split("").map((char, i) => (
                    <span className="charSpan" key={char + i}>
                      {char}
                    </span>
                  ))}
                </div>
                <p className="projectData">
                {string[el.id][language].map((el, i) => (
                    <span key={el.id + language + i}>
                      {el}
                      <br />
                    </span>
                  ))} 
                </p>
              </div>

              <div className="utils">
                {el.repo ? (
                  <a href={el.repo} className="links" /* className="icon" */>
                    <img src={github} alt="github logo" />
                  </a>
                ) : null}
                {el.link ? (
                  <a href={el.link} className="links" /* className="icon" */>
                    <img src={arrow} alt="" />
                  </a>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
      <span className="closedTag">{"</Projects>"}</span>
    </StyledProjects>
  );
};