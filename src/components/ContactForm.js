import React, { useState } from "react";
import styled from "styled-components";
import Recaptcha from "react-recaptcha";

const Form = styled.form`
  .hidden {
    opacity: 0;
    visibility: hidden;
  }

  h2 {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.2);
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

  .next-btn {
    display: block;
    background-color: transparent;
    border: 0px solid;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    font-size: 18px;
    margin-left: auto;
    margin-top: 1rem;

    span {
      background-color: black;
      height: 1px;
      width: 0;
    }

    :hover {
      span {
        width: 100%;
        
      }
    }
  }
`;

const TextArea = styled.textarea`
  display: block;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  outline: none;
  resize: none;

  :focus {
    border: 1.5px solid rgb(128, 255, 212);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    transition: 0.3s ease-in-out;
  }
`;

const StyledButton = styled.button`
  display: block;
  width: 200px;
  padding: 1rem;
  text-align: center;
  background-color: rgb(128, 255, 212);
  ${(props) => (props.centered ? "margin: 0 auto;" : "")}
  ${(props) => (props.dark ? "color: black;" : "")}
  border-radius: 3px;
  font-weight: 700;
  transition: 0.5s ease-in-out;
  outline: none;

  :hover {
    text-decoration: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
    transition: 0.5s ease-in-out;
  }
`;

const ContactForm = () => {
  const [activeField, setActiveField] = useState("name");

  return (
      <Form
        name="Contact Form"
        method="POST"
        data-netlify="true"
        action="/success"
        data-netlify-recaptcha="true"
      >
        <h2>Get in touch</h2>
        <label for="form-name"></label>
        <input type="hidden" name="form-name" value="Contact Form" />
        <InputGroup className={activeField === "name" ? "" : "hidden"}>
          <label for="name">1. Who are you?</label>
          <input type="text" name="name" placeholder="Full name" />
          <button className="next-btn"><span></span>Next<span></span></button>
        </InputGroup>
        <InputGroup className={activeField === "email" ? "" : "hidden"}>
          <label for="email">2. Where do I reply to?</label>
          <input type="text" name="email" placeholder="Valid email address" />
        </InputGroup>
        <InputGroup className={activeField === "subject" ? "" : "hidden"}>
          <label for="subject">3. Why are you contacting me?</label>
          <input type="text" name="subject" placeholder="Nature of enquiry" />
        </InputGroup>
        <InputGroup className={activeField === "message" ? "" : "hidden"}>
          <label for="message">4. What would you like to say to me?</label>
          <TextArea rows="4" name="message" placeholder="Leave your message..." />
        </InputGroup>
        <InputGroup className={activeField === "captcha" ? "" : "hidden"}>
          <Recaptcha
            sitekey={process.env.GATSBY_RECAPTCHA_KEY}
          />
        </InputGroup>
        <InputGroup className={activeField === "submit" ? "" : "hidden"}>
          <StyledButton type="submit">Submit</StyledButton>
        </InputGroup>
      </Form>
  );
};

export default ContactForm;
