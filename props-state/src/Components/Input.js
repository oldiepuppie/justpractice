import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 30vw;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: none;
  border: 1px solid black;
`;

const StyledTextArea = styled.input`
  height: 10vh;
  margin: 0.5rem 0 1rem;
  padding: 0.5rem;
  border-radius: none;
  border: 1px solid black;
  overflow-y:auto;
`;

const InputButton = styled.button`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background-color: #5E8B7E;
  border: none;
  border-radius: 0.2rem;
  width: 10rem;
  font-size: 1.3rem;
  color: #ffffff;

  &:hover {
    background-color: #2F5D62;
  }
`;

export default function Input() {
  const mockMessages = [
    {
      id: 1,
      name: 'lorem',
      message: 'Vivamus vel accumsan nibh. Mauris ut nisl vitae sem consectetur volutpat. Sed fringilla nisi ante, ac semper velit accumsan eget.'
    },
    {
      id: 2,
      name: 'ipsum',
      message: 'Nunc vitae urna ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec risus justo.'
    },
    {
      id: 3,
      name: 'anonymous',
      message: 'Pellentesque a enim a lectus pellentesque volutpat.'
    }
  ];

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [contents, setContents] = useState(mockMessages);

  const handleContents = () => {
    if (name.length !== 0 && message.length !== 0) {
      const newMessage = {
        id: uuidv4(),
        name: name,
        message: message
      };

      setContents([newMessage, ...mockMessages]);
      setName('');
      setMessage('');
    }
  }

  const handleInputText = (event) => {
    setName(event.target.value);
  }

  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

  return (
    <div className="example">
      <h2 className="input-title">Form</h2>
      <StyledInput
        type="text"
        placeholder="name"
        value = {name}
        onChange = {handleInputText}
      />
      <StyledTextArea
        placeholder='message'
        value = {message}
        onChange = {handleMessage}
      />
      <InputButton 
        className="form-send"
        onClick={handleContents}
      >
        send
      </InputButton>

      <div className="messages">
        <ul className="messages-list">
          {contents.map(content => {
            return(
            <li className="single-message" key={content.id}>
              <p className="username-elem">{content.name}</p>
              <p className="message-elem">{content.message}</p>
            </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}