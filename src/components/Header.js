import React from "react";

export const Header = ({ logout }) => (
  <header>
    <div className="logo"></div>
    <div className="logout" onClick={logout}>
      <span className="title">Logout</span>
    </div>
  </header>
);