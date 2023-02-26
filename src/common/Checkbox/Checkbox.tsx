import React from "react";

// components
import * as C from "./styles";

// icons
import { ICheckTick } from "../svg";

interface CheckboxProps {
  checked: boolean;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, label }) => {
  return (
    <C.CheckboxWrapper>
      <C.Checkbox checked={checked}>{checked && <ICheckTick />}</C.Checkbox>
      <C.CheckboxLabel>{label}</C.CheckboxLabel>
    </C.CheckboxWrapper>
  );
};

export default Checkbox;
