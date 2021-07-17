import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
      <input
        type="text"
        placeholder="name"
        value = {name}
        onChange = {handleInputText}
      />
      <textarea 
        placeholder="message"
        value = {message}
        onChange = {handleMessage}
      />
      <button 
        className="form-send"
        onClick={handleContents}
      >
        send
      </button>

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