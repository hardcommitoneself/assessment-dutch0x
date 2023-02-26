import React from "react";

// components
import * as C from "./styles";

interface ProgressProps {
  percent: number;
}

const Progress: React.FC<ProgressProps> = ({ percent }) => {
  return (
    <C.ProgressWrapper>
      <C.ProgressTrack percent={percent} />
    </C.ProgressWrapper>
  );
};

export default Progress;
