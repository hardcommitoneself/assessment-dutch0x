import React from "react";

// components
import * as C from "./styles";

interface InputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ leftIcon, rightIcon, placeholder }) => {
  const isLeftIcon = !!leftIcon;
  const isRightIcon = !!rightIcon;

  return (
    <C.InputWrapper isLeftIcon={isLeftIcon} isRightIcon={isRightIcon}>
      {/* left icon */}
      {isLeftIcon && <C.LeftIconWrapper>{leftIcon}</C.LeftIconWrapper>}
      <C.Input placeholder={placeholder} />
      {/* right icon */}
      {isRightIcon && <C.RightIconWrapper>{rightIcon}</C.RightIconWrapper>}
    </C.InputWrapper>
  );
};

export default Input;
