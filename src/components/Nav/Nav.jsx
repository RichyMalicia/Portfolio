import React from "react";
import langua from "../../utils/img/langua.png";
import solyluna from "../../utils/img/solyluna.png";
import { StyledNav } from "../Styled/StyledNav";

export default function Nav({ switchMode, changeLanguage }) {
  const displayLanguages = () => {
    const languages = document.querySelector(".languages");
    if (languages.style.display === "none" || !languages.style.display) {
      return (languages.style.display = "flex");
    }
    languages.style.display = "none";
  };

  const handleClick = (language) => {
    changeLanguage(language);
    displayLanguages();
  };

  const showThanks = () => {
    const none = document.querySelector(".d-none");
    const move = document.querySelector(".move");
    none ? (none.className = "move") : (move.className = "d-none");
  };

  return (
    <StyledNav className="Nav">
      <div className="logo" onClick={showThanks}>
        <h1 className="logoH1">{"<>"}</h1>
      </div>
      <div className="d-none">
        <h3>Thanks!</h3>
      </div>
      <div className="utils">
        <img
          src={langua}
          alt="Change Language"
          className="NavIcon"
          onClick={displayLanguages}
        /> 
         <img src={solyluna} alt="Switch Mode" id="modeIcon" onClick={switchMode} /> 
      </div>
      <div className="languages">
        <ul>
          <li onClick={() => handleClick("en")}>English</li>
          <li onClick={() => handleClick("es")}>Español</li>
          
        </ul>
      </div>
    </StyledNav>
  );
}