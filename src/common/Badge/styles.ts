import styled from "styled-components";

export type BadgeVariant = "success" | "warning" | "error" | "info";
interface BadgeWrapperProps {
  type: BadgeVariant;
}

const pallate = {
  success: "background-color: rgba(60, 170, 42, 0.2); color: #3CAA2A;",
  warning: "background-color: rgba(60, 170, 42, 0.2); color: #3CAA2A;",
  info: "background-color: rgba(60, 170, 42, 0.2); color: #3CAA2A;",
  error: "background-color: rgba(60, 170, 42, 0.2); color: #3CAA2A;",
};

const bullets = {
  success: "background-color: #3CAA2A;",
  warning: "background-color: #3CAA2A;",
  info: "background-color: #3CAA2A;",
  error: "background-color: #3CAA2A;",
};

export const BadgeWrapper = styled.div.attrs({
  className: `relative inline-flex items-center justify-center whitespace-nowrap rounded h-7 pl-5 pr-2 uppercase text-xs font-bold`,
})`
  ${(p: BadgeWrapperProps) => pallate[p.type]}

  &::after {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: 50%;
    left: 8px;
    transform: translateY(-4px);
    ${(p: BadgeWrapperProps) => bullets[p.type]}
  }
`;
