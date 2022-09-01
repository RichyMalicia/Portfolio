import styled from "styled-components";

export const StyledContact = styled.div`
  padding: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .contact-form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 15px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    height: 75%;
    input,
    textarea {
      border-radius: 15px;
      border: 2px solid rgba(0, 0, 0, 0.3);
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      padding: 0.5rem;
      margin-left: 1rem;
    }
  }
  .inputName {
    width: 25%;
  }
  .email {
    width: 50%;
  }
  .message {
    width: 95%;
    height: 60%;
    resize: none;
  }
  .sendMail {
    width: 15%;
    align-self: center;
    font-weight: 1000;
    cursor: pointer;
    transition: transform 500ms ease;
    &:enabled:hover {
      transform: scale(1.05);
    }
    &:disabled {
      cursor: default;
      opacity: 50%;
    }
  }
  .openTag,
  .closedTag,
  .closedMainTag {
    font-size: 1.2rem;
    font-weight: 1000;
    opacity: 60%;
  }
  .openTag {
    position: relative;
    left: 1rem;
  }
  .closedTag,
  .closedMainTag {
    align-self: flex-end;
  }
  .closedTag {
    margin: 1rem 1.5rem;
  }
  @media screen and (max-width: 500px) {
    .contact-form {
      align-items: center;
      .inputName {
        width: 60%;
      }
      .email {
        width: 90%;
      }
      input[type="submit"] {
        width: 30%;
      }
    }
  }
`;