import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: flex-end;
  .logo {
    margin: 0 2%;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    h1 {
      font-weight: 1000;
      font-size: 3rem;
      transition: font-size 500ms ease;
      &:hover {
        font-size: 3.1rem;
      }
    }
  }
  .utils {
    height: 6vh;
    position: absolute;
    top: 0;
    right: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 8%;
    min-width: 7rem;
    img {
      height: 70%;
      cursor: pointer;
      filter: grayscale(80%);
      transition: filter 500ms ease;
      &:hover {
        filter: grayscale(0);
      }
    }
  }
  #modeIcon {
    transition: transform 500ms ease;
  }
  .languages {
    display: none;
    position: absolute;
    top: 6vh;
    right: 5%;
    padding: 0.8rem;
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 3;
    ul {
      list-style: none;
      li {
        margin: 0.5rem;
        cursor: pointer;
        &:hover {
          font-weight: 750;
        }
      }
    }
  }
  .d-none {
    display: none;
  }
  .move {
    transition: transform 1s ease;
    animation: move 2s 1 ease;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    align-self: center;
    padding: 0.1rem;
    border-radius: 5px;
    box-shadow: 2px 0 0 black;
  }
  @keyframes move {
    0% {
      width: 0;
    }
    25% {
      width: 1rem;
    }
    50% {
      width: 0;
    }
    100% {
      width: 5rem;
    }
  }
`;
