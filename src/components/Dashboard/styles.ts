import styled from "styled-components";

export const DashbaordWrapper = styled.div.attrs({
  className: "relative flex flex-col",
})``;

export const DashboardContent = styled.div.attrs({
  className: "flex gap-6 p-6",
})``;

// events
export const Events = styled.div.attrs({
  className: "relative flex flex-col gap-2 grow",
})``;

export const EventsHeader = styled.h1.attrs({
  className: "text-2xl whitespace-nowrap text-black/50",
})``;

export const EventsContent = styled.div.attrs({
  className: "flex flex-col gap-6",
})``;

// overview
export const Overview = styled.div.attrs({
  className: "relative flex flex-col gap-2 w-1/4",
})``;

export const OverviewHeader = styled.h1.attrs({
  className: "text-2xl whitespace-nowrap text-black/50",
})``;

export const OverviewContent = styled.div.attrs({
  className: "flex flex-col gap-6",
})``;

// banner
export const Banner = styled.div.attrs({
  className: "flex px-6 pb-6 border-b border-black/10 bg-white",
})`
  padding-top: 84px;
`;

export const BannerInner = styled.div.attrs({
  className: "w-full grid grid-cols-5 gap-4",
})``;
