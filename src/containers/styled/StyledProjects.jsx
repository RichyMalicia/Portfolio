import styled from "styled-components";

export const StyledProjects = styled.div`
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: min-content;
  ul {
    list-style: none;
    li {
      position: relative;
      display: flex;
      align-items: center;
      height: 15rem;
      border: 2px solid rgba(0, 0, 0, 0.5);
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      padding: 1rem;
      margin-bottom: 2rem;
      img {
        height: 80%;
        border-radius: 10px;
        margin-right: 1rem;
        filter: grayscale(80%);
        transition: filter 500ms ease;
        &:hover {
          filter: grayscale(0);
        }
      }
      p {
        margin: 0.5rem 0;
      }
      span {
        font-size: 0.8rem;
        transition: all 500ms ease;
      }
    }
  }
  .charSpan {
    font-weight: 1000;
    font-size: 1.2rem;
    transition: all 250ms ease;
    cursor: default;
    &:hover {
      font-size: 1.25rem;
    }
  }
  .utils {
    height: 1.5rem;
    position: absolute;
    bottom: 0.5rem;
    right: 0;
    img {
      height: 100%;
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
  @media screen and (max-width: 500px) {
    width: 100vw;
    ul li {
      width: 100%;
      display: flex;
      flex-direction: column;
      height: min-content;
      padding-bottom: 3rem;
      .preview {
        margin: 0 auto;
        width: 100%;
        filter: grayscale(0);
      }
    }
  }
`;