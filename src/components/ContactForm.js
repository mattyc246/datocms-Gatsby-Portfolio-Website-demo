import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: block;
`

const InputGroup = styled.div`
  width: 100%;
  padding: 1rem 0;
`

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

const ContactForm = () => {
  return (
    <form>
      <InputGroup>
        <Label>Name:</Label>
        <Input type="text" placeholder="Full name" />
      </InputGroup>
      <InputGroup>
        <Label>Email:</Label>
        <Input type="text" placeholder="Valid email address" />
      </InputGroup>
      <InputGroup>
        <Label>Subject:</Label>
        <Input type="text" placeholder="Nature of enquiry" />
      </InputGroup>
      <InputGroup>
        <Label>Message:</Label>
        <TextArea rows="4" placeholder="Leave your message..."/>
      </InputGroup>
    </form>
  )
}

export default ContactForm
