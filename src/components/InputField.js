import React from "react";

export const InputField = ({
  value,
  onChange,
  placeholder,
  name,
  type,
  error,
}) => (

  
<div className="container">
  <h2 className="label">{placeholder}</h2>
  <input
    className="element"
    name={name ? name : placeholder}
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
  {error && <div className="error" >{error}</div>}
</div>
);
