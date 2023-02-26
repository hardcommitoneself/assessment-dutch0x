import React from "react";

// components
import * as C from "./styles";
import type { ButtonVariant } from "./styles";

interface ButtonProps {
  variant: ButtonVariant;
  lablel: string;
}

const Button: React.FC<ButtonProps> = ({ variant, lablel }) => {
  return <C.ButtonWrapper variant={variant}>{lablel}</C.ButtonWrapper>;
};

export default Button;
