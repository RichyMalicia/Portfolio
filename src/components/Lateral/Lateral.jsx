import React from "react";
import { Link } from "react-scroll";
import Scrollspy from "react-scrollspy";
import { StyledLateral } from "../Styled/StyledLateral";
import strings from "./Languaje";

export default function Lateral({ path, language }) {
  return (
    <StyledLateral className="Lateral" path={!!path}>
      <h1>{path}</h1>
      <Scrollspy
        items={["Home", "Skills", "Projects", "Contact"]}
        currentClassName="active"
      />
      <div className="links">
        <h3>
          <Link to="Home" spy={true} activeClass="active" smooth duration={400}>
            {strings[language].home}
          </Link>
        </h3>
        <h3>
          <Link to="Skills" spy={true} className="link" smooth duration={400}>
            {strings[language].skills}
          </Link>
        </h3>
        <h3>
          <Link to="Projects" spy={true} className="link" smooth duration={400}>
            {strings[language].projects}
          </Link>
        </h3>
        <h3>
          <Link to="Contact" spy={true} className="link" smooth duration={400}>
            {strings[language].contact}
          </Link>
        </h3>
      </div>
    </StyledLateral>
  );
}