import styled from "styled-components";

interface ProgressTrackProps {
  percent: number;
}

export const ProgressWrapper = styled.div.attrs({
  className: "relative flex w-full h-4 rounded-lg bg-black/10",
})``;

export const ProgressTrack = styled.div.attrs({
  className: "absolute top-0 left-0 rounded-lg h-4",
})`
  background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    #ff4800;
  background-blend-mode: overlay, normal;

  ${(p: ProgressTrackProps) => `width: ${p.percent}%;`}
`;
