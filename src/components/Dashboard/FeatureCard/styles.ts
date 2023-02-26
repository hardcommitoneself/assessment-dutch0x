import styled from "styled-components";

export type FeatureCardVariant = "green" | "yellow" | "sky" | "purple" | "red";

interface FeatureCardInnerProps {
  variant: FeatureCardVariant;
}

const pallate = {
  green:
    "background: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #2EC62E;",
  yellow: "background-color: #F5D72E50;",
  sky: "background-color: #2EC4DA50;",
  purple: "background-color: #A74CC950;",
  red: "background-color: #EF4FAD50;",
};

export const FeatureCardWrapper = styled.div.attrs({
  className: "flex flex-col gap-2",
})``;

export const FeatureCardInner = styled.div.attrs({
  className: "flex items-center justify-center rounded-lg",
})`
  ${(p: FeatureCardInnerProps) => pallate[p.variant]}

  height: 152px;
`;

export const FeatureCardLable = styled.span.attrs({
  className: "font-bold whitespace-nowrap text-center",
})``;
