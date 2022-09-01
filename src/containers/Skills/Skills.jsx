import React from "react";
import { StyledSkills } from "../styled/StyledSkills";
import skills from "./skills";

export default function Skills() {
  return (
    <StyledSkills id="Skills">
      <span className="openTag">{"<Skills>"}</span>
      <div className="primary">
        <ul>
          {skills.primary.map((el) => (
            <li key={el.title}>
              <img src={el.logo} alt={el.title} className="logo" />
              <span className="title">{el.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="front">
        <ul>
          {skills.front.map((el) => (
            <li key={el.title}>
              <img src={el.logo} alt={el.title} className="logo" />
              <span className="title">{el.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="back">
        <ul>
          {skills.back.map((el) => (
            <li key={el.title}>
              <img src={el.logo} alt={el.title} className="logo" />
              <span className="title">{el.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <span className="closedTag">{"</Skills>"}</span>
    </StyledSkills>
  );
}