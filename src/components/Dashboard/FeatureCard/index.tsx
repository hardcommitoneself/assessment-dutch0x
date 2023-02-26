import React from "react";

// components
import * as C from "./styles";
import { FeatureCardVariant } from "./styles";

interface FeatureCardProps {
  variant: FeatureCardVariant;
  icon: JSX.Element;
  label: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  variant,
  icon,
  label = "",
}) => {
  return (
    <C.FeatureCardWrapper>
      <C.FeatureCardInner variant={variant}>{icon}</C.FeatureCardInner>
      <C.FeatureCardLable>{label}</C.FeatureCardLable>
    </C.FeatureCardWrapper>
  );
};

export default FeatureCard;
