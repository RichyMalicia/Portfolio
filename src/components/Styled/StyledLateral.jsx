import styled from "styled-components";

export const StyledLateral = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 5rem;
  &:hover .links {
    opacity: 100%;
  }
  &:hover h1 {
    opacity: 0%;
  }
  h1 {
    transform: rotate(270deg);
    transition: opacity 250ms ease;
    position: fixed;
    top: 50vh;
  }
  .links {
    margin: 1rem;
    display: flex;
    position: fixed;
    top: 0;
    opacity: ${(props) => (props.path ? "0%" : "40%")};
    height: 100%;
    transition: opacity 500ms ease;
    flex-direction: column;
    justify-content: space-around;
    &:hover {
      opacity: 80%;
    }
    * {
      text-decoration: none;
    }
    h3 {
      width: min-content;
      align-self: center;
      transform: rotate(270deg);
      transition: opacity 250ms ease;
      cursor: pointer;
    }
  }
  .active {
    transition: 500ms ease;
    font-size: 1.8rem;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;