import React from "react";

export const PasswordEye = ({
  className,
  onClick,
  iconRevealPassword = React.createRef()
}) => (
<span
  className={`icon ${className}`}
  onClick={onClick}
  ref = {iconRevealPassword} >
</span>
);