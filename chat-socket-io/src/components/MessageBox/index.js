import React from 'react';

function MenssageBox({ isMine }) {
  const positionClass = (isMine) ? 'right-msg' : 'left-msg';
  return (
    <div className={`msg ${positionClass}`}>
      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">Sajad</div>
          <div className="msg-info-time">12:46</div>
        </div>

        <div className="msg-text">You can change your name in JS section!</div>
      </div>
    </div>
  );
}

export default MenssageBox;
