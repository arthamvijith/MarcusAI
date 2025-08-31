import React, { useState } from 'react';
import './InputArea.css';

const SendIcon = () => (
  // This is a clean, simple send icon SVG
  <svg height="22" width="22" viewBox="0 0 24 24" fill="#9e8fc8">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
);

const InputArea = () => {
  const [msg, setMsg] = useState('');
  return (
    <form className="input-area">
      <input
        type="text"
        value={msg}
        onChange={e => setMsg(e.target.value)}
        placeholder="Ask your business AI assistant..."
      />
      <button type="submit" className="send-btn">
        <SendIcon />
      </button>
    </form>
  );
};

export default InputArea;
