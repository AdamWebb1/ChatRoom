import React from 'react';

function MessageInput(props) {
  return (
    <div className="chat-message-input">
      <form onSubmit={props.onSubmit}>
      <input type="text" 
             name="message-input" 
             id="message-input" 
             onChange={props.onChange}
             value={props.messageInput} />
      </form>

    </div>
  );
}

export default MessageInput;
