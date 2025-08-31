import React from 'react';

const Header = () => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: '80px',
    marginBottom: "18px"
  }}>
    <h2 style={{ fontSize: "1.7rem", color: "#17043d", marginBottom: "2px" }}>
      AI Business Intelligence
    </h2>
    <span style={{ fontSize: "1rem", color: "#9e8fc8" }}>
      Enterprise-grade AI solutions for business automation and intelligent decision making
    </span>
  </div>
);

export default Header;
