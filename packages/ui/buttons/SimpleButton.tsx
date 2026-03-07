import React, { ButtonHTMLAttributes } from "react";

type SimpleButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const SimpleButton = ({ children, ...props }: SimpleButtonProps) => {
  return (
    <button {...props} style={{ padding: "10px 16px", borderRadius: "6px" }}>
      {children || "UIQubes Button 123"}
    </button>
  );
};