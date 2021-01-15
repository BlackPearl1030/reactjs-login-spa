import React from "react";

export const Button = ({ label, onClick, className }) => (
  <button className={`btn ${className}`} onClick={onClick}>
    {label}
  </button>
);