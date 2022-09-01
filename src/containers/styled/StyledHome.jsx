import styled from "styled-components";

export const StyledHome = styled.div`
  padding: 2rem;
  display: flex;
  width: 90vw;
  position: relative;
  height: min-content;
  .social {
    height: 2rem;
    width: 12rem;
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 3rem;
    img {
      height: 2.5rem;
      width: 2.5rem;
    }
    a {
      width: 3rem;
    }
  }
  .presentation {
    align-self: center;
    height: 20%;
    margin-bottom: 12rem;
    .title {
      font-size: 2.5rem;
      transition: all 250ms ease;
      &:hover {
        margin: 0.1rem;
        filter: blur(1px);
      }
    }
    .subtitle {
      opacity: 80%;
      margin-bottom: 3rem;
      position: relative;
      display: inline-block;
      font-size: 2em;
      font-weight: 800;
      overflow: hidden;
      background: ${(props) =>
        props.dark
          ? "linear-gradient(to right, white, white 50%, gray 50%)"
          : "linear-gradient(to right, black, black 50%, gray 50%)"};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 100%;
      background-position: 100%;
      transition: background-position 275ms ease;
      &:hover {
        background-position: 0 100%;
      }
    }
    .data {
      font-size: 1.2rem;
      font-weight: 600;
      width: 75%;
      margin-bottom: 3rem;
    }
    .button {
      padding: 0.5rem;
      border-radius: 10px;
      border: 1px solid black;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      font-size: 1rem;
      cursor: pointer;
      opacity: 80%;
      transition: opacity 500ms ease;
      text-decoration: none;
      &:hover {
        opacity: 100%;
      }
    }
  }
  .openTag {
    position: absolute;
    bottom: 0;
    font-size: 1.2rem;
    font-weight: 1000;
    opacity: 60%;
  }
  @media screen and (max-width: 500px) {
    width: 100vw;
    flex-direction: column;
    .social {
      width: 50%;
      margin: 0 auto;
      position: static;
    }
    .presentation {
      margin-top: 20vh;
      height: min-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20vh;
      .data {
        margin-top: 1rem;
        font-size: 1.1rem;
      }
      .subtitle {
        display: none;
      }
    }
  }
`;