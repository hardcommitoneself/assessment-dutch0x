import styled from "styled-components";

export type ButtonVariant = "solid" | "outline";

interface ButtonWrapperProps {
  variant: ButtonVariant;
}

const buttonPallate = {
  solid: "background-color: black; color: white;",
  outline: "border: 1px solid #000000; color: black;",
};

// button
export const ButtonWrapper = styled.div.attrs({
  className:
    "inline-flex items-center justify-center outline-none h-10 rounded-lg px-4 cursor-pointer",
})`
  ${(p: ButtonWrapperProps) => buttonPallate[p.variant]}
`;

// icon button
export const IconButtonWrapper = styled.div.attrs({
  className:
    "flex items-center justify-center w-8 h-8 cursor-pointer hover:bg-black/10 transition rounded",
})``;
