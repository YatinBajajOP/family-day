// import React from 'react';
// import '../styles/Message.css';

// const Message = ({ message }) => {
//   return <div className="message-box">{message}</div>;
// };

// export default Message;
import React from 'react';
import '../styles/Message.css';

const Message = ({ text }) => {
  return (
    <div className="message">
      {text}
    </div>
  );
};

export default Message;
