import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
`;

const InputGroup = styled.div`
  width: 100%;
  padding: 0.5rem 0;
`;

const Input = styled.input`
  display: block;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  outline: none;

  :focus {
    border: 1.5px solid rgb(128, 255, 212);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    transition: 0.3s ease-in-out;
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
  return (
    <form
      name="Contact Form"
      method="POST"
      data-netlify="true"
      action="/success"
    >
      <input type="hidden" name="form-name" value="Contact Form" />
      <InputGroup>
        <Label>Name:</Label>
        <Input type="text" name="name" placeholder="Full name" />
      </InputGroup>
      <InputGroup>
        <Label>Email:</Label>
        <Input type="text" name="email" placeholder="Valid email address" />
      </InputGroup>
      <InputGroup>
        <Label>Subject:</Label>
        <Input type="text" name="subject" placeholder="Nature of enquiry" />
      </InputGroup>
      <InputGroup>
        <Label>Message:</Label>
        <TextArea rows="4" name="message" placeholder="Leave your message..." />
      </InputGroup>
      <StyledButton type="submit">Submit</StyledButton>
    </form>
  );
};

export default ContactForm;
