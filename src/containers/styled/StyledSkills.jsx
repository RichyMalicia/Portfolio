import styled from "styled-components";

export const StyledSkills = styled.div`
  padding: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  height: min-content;
  span {
    font-size: 1.2rem;
    font-weight: 1000;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 100%;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .primary {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
  .front,
  .back {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 1rem;
  }
  .logo {
    border-radius: 100%;
    height: 5rem;
    width: 5rem;
    object-fit: cover;
    filter: grayscale(90%);
    &:hover {
      filter: grayscale(0);
      animation: bounce 2s infinite ease;
    }
  }
  .openTag,
  .closedTag {
    font-size: 1.2rem;
    font-weight: 1000;
    opacity: 60%;
  }
  .openTag {
    position: relative;
    left: 1rem;
  }
  .closedTag {
    align-self: flex-end;
  }
  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-40px);
    }
    50% {
      transform: scale(1.05, 0.95) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-7px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
  @media screen and (max-width: 500px) {
    width: 100vw;
    .primary,
    .front,
    .back {
      width: 100%;
      ul {
        flex-wrap: wrap;
        justify-content: space-center;
        li {
          margin: 1rem 0.5rem;
        }
      }
      .logo {
        filter: grayscale(0);
      }
    }
  }
`;