import React from 'react';

function MenssageBox({ isMine, user, sendAt, message }) {
  const positionClass = (isMine) ? 'right-msg' : 'left-msg';
  return (
    <div className={`msg ${positionClass}`}>
      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">{user}</div>
          <div className="msg-info-time">{sendAt}</div>
        </div>
          {message}
        <div className="msg-text">
          </div>
      </div>
    </div>
  );
}

export default MenssageBox;
