import styled from "styled-components";

interface InputWrapperProps {
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
}

export const InputWrapper = styled.div.attrs({
  className:
    "relative w-full inline-flex items-center justify-center h-9 border border-black/20 rounded-lg",
})`
  padding: 6px;

  ${(p: InputWrapperProps) => p.isLeftIcon && "padding-left: 46px !important;"}
  ${(p: InputWrapperProps) =>
    p.isRightIcon && "padding-right: 40px !important;"}
`;

export const Input = styled.input.attrs({ className: "outline-none w-full" })``;

export const LeftIconWrapper = styled.div.attrs({
  className: "absolute px-3 inline-flex items-center justify-center",
})`
  left: 6px;
  top: 6px;
  bottom: 6px;
`;

export const RightIconWrapper = styled.div.attrs({
  className: "absolute inline-flex items-center justify-center",
})`
  top: 6px;
  bottom: 6px;
  right: 6px;
`;
