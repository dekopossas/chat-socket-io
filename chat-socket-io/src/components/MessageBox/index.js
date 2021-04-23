import React from 'react';

function MenssageBox({ isMine }) {
  const positionClass = (isMine) ? 'right-msg' : 'left-msg';
  return (
    <div class="msg right-msg">
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">Sajad</div>
          <div class="msg-info-time">12:46</div>
        </div>

        <div class="msg-text">You can change your name in JS section!</div>
      </div>
    </div>
  );
}

export default MenssageBox;
