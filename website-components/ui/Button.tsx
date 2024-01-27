import React, { ReactNode } from "react";

interface ButtonProperties {
  children: ReactNode;
  variant?: "plain" | "default";
  onClick?: Function;
}

function Button({ children, variant, onClick }: ButtonProperties) {
  switch (variant) {
    case "plain":
      return (
        <button
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
          className="text-slate-400 cursor-pointer flex items-center gap-2 hover:text-slate-700"
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
          className="flex items-center cursor-pointer text-sm gap-1 px-4 py-3 bg-green-600 hover:bg-green-700 transition-colors delay-75 text-white rounded-md"
        >
          {children}
        </button>
      );
  }
}

export default Button;
