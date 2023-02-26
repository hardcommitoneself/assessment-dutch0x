import React from "react";

// components
import { BadgeWrapper } from "./styles";

// type
import { BadgeVariant } from "./styles";
interface BadgeProps {
  label: string;
  variant: BadgeVariant;
}

const Badge: React.FC<BadgeProps> = ({ label, variant }) => {
  return <BadgeWrapper type={variant}>{label}</BadgeWrapper>;
};

export default Badge;
