import React from "react";

// components
import * as C from "./styles";

interface IconButtonProps {
  icon: JSX.Element;
}

const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  return <C.IconButtonWrapper>{icon}</C.IconButtonWrapper>;
};

export default IconButton;
