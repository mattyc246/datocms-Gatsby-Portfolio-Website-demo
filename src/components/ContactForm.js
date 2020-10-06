import React, { useState } from "react";
import styled from "styled-components";
import Recaptcha from "react-recaptcha";

const Form = styled.form`
  .shown {
    opacity: 1;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    visibility: visible;
    transition: opacity 800ms 800ms cubic-bezier(0.215, 0.61, 0.355, 1);
    z-index: 1;
  }

  .hidden {
    opacity: 0;
    min-height: 50vh;
    height: 0;
    transition: opacity 800ms cubic-bezier(0.215, 0.61, 0.355, 1);
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    letter-spacing: 4px;
    font-weight: 700;
    font-size: 38px;
  }

  label {
    display: block;
    font-weight: 200;
    font-size: 36px;
    letter-spacing: 2px;
  }
`;

const InputGroup = styled.div`
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  input {
    display: block;
    padding: 1rem;
    width: 100%;
    border: 0px solid;
    border-radius: 0px;
    border-bottom: 5px solid rgb(0, 0, 0);
    outline: none;
    font-size: 18px;

    :focus {
      border-bottom: 5px solid rgb(128, 255, 212);
      transition: 0.3s ease-in-out;
    }
  }

  textarea {
    display: block;
    padding: 1rem;
    width: 100%;
    border: 0px solid;
    border-radius: 0px;
    border-bottom: 5px solid rgb(0, 0, 0);
    outline: none;
    font-size: 18px;
    resize: none;

    :focus {
      border-bottom: 5px solid rgb(128, 255, 212);
      transition: 0.3s ease-in-out;
    }
  }

  .next-back-btn {
    display: block;
    background-color: transparent;
    border: 0px solid;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    font-size: 18px;
    margin-top: 1rem;
    outline: none;

    span {
      display: block;
      width: 0;
      height: 2px;
      background-color: black;
    }

    :hover {
      span {
        width: 100%;
        transition: width 400ms cubic-bezier(0.39, 1.52, 0.46, 0.92);
      }
    }
  }
`;

const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  display: block;
  margin: 1rem auto;
  width: 200px;
  padding: 1rem;
  text-align: center;
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 3px;
  font-weight: 700;
  transition: 0.5s ease-in-out;
  outline: none;
  border: 2px solid black;

  :hover {
    text-decoration: none;
    background-color: transparent;
    color: black;
    transition: all 0.5s ease-in-out;
  }
`;

const ContactForm = () => {
  const [activeField, setActiveField] = useState(0);
  const fieldOrder = [
    "name",
    "email",
    "subject",
    "message",
    "captcha",
    "submit",
  ];

  const nextField = (e) => {
    e.preventDefault();
    setActiveField(activeField + 1);
  };

  const prevField = (e) => {
    e.preventDefault();
    setActiveField(activeField - 1);
  };

  return (
    <Form
      name="Contact Form"
      method="POST"
      data-netlify="true"
      action="/success"
      data-netlify-recaptcha="true"
    >
      <h2>Get in touch</h2>
      <label htmlFor="formName" style={{display: 'none'}}>Form</label>
      <input id="formName" style={{display: 'none'}} name="form-name" value="Contact Form" />
      <InputGroup
        className={fieldOrder[activeField] === "name" ? "shown" : "hidden"}
      >
        <label htmlFor="contactName">Who are you?</label>
        <input id="contactName" type="text" name="name" placeholder="Full name" />
        <NavButtons>
          <span></span>
          <button className="next-back-btn" onClick={(e) => nextField(e)}>
            <span></span>Next<span></span>
          </button>
        </NavButtons>
      </InputGroup>
      <InputGroup
        className={fieldOrder[activeField] === "email" ? "shown" : "hidden"}
      >
        <label htmlFor="email">Where do I reply to?</label>
        <input type="text" name="email" placeholder="Valid email address" />
        <NavButtons>
          <button className="next-back-btn" onClick={(e) => prevField(e)}>
            <span></span>Back<span></span>
          </button>
          <button className="next-back-btn" onClick={(e) => nextField(e)}>
            <span></span>Next<span></span>
          </button>
        </NavButtons>
      </InputGroup>
      <InputGroup
        className={fieldOrder[activeField] === "subject" ? "shown" : "hidden"}
      >
        <label htmlFor="subject">Why are you contacting me?</label>
        <input type="text" name="subject" placeholder="Nature of enquiry" />
        <NavButtons>
          <button className="next-back-btn" onClick={(e) => prevField(e)}>
            <span></span>Back<span></span>
          </button>
          <button className="next-back-btn" onClick={(e) => nextField(e)}>
            <span></span>Next<span></span>
          </button>
        </NavButtons>
      </InputGroup>
      <InputGroup
        className={fieldOrder[activeField] === "message" ? "shown" : "hidden"}
      >
        <label htmlFor="message">What would you like to say to me?</label>
        <textarea rows="4" name="message" placeholder="Leave your message..." />
        <NavButtons>
          <button className="next-back-btn" onClick={(e) => prevField(e)}>
            <span></span>Back<span></span>
          </button>
          <button className="next-back-btn" onClick={(e) => nextField(e)}>
            <span></span>Next<span></span>
          </button>
        </NavButtons>
      </InputGroup>
      <InputGroup
        className={fieldOrder[activeField] === "captcha" ? "shown" : "hidden"}
      >
        <div style={{ display: "block", margin: "0 auto" }}>
          <Recaptcha sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
        </div>
        <NavButtons>
          <button className="next-back-btn" onClick={(e) => prevField(e)}>
            <span></span>Back<span></span>
          </button>
          <button className="next-back-btn" onClick={(e) => nextField(e)}>
            <span></span>Next<span></span>
          </button>
        </NavButtons>
      </InputGroup>
      <InputGroup
        className={fieldOrder[activeField] === "submit" ? "shown" : "hidden"}
      >
        <StyledButton type="submit">Submit</StyledButton>
      </InputGroup>
    </Form>
  );
};

export default ContactForm;
