import styled from "styled-components";

interface CheckboxWrapperProps {
  checked: boolean;
}

export const CheckboxWrapper = styled.div.attrs({
  className: "flex items-center",
})``;

export const Checkbox = styled.div.attrs({
  className: "inline-flex items-center justify-center gap-1 rounded-sm mx-2",
})`
  width: 14px;
  height: 14px;

  ${(p: CheckboxWrapperProps) =>
    p.checked ? "background-color: black;" : "border: 1px solid black;"}
`;

export const CheckboxLabel = styled.div.attrs({
  className: "text-black whitespace-nowrap",
})``;
