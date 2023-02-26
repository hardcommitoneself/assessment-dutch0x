import styled from "styled-components";

export const OverviewWrapper = styled.div.attrs({
  className:
    "relative w-full flex flex-col bg-white border border-black/10 shadow-sm rounded-lg",
})``;

export const OverviewHeader = styled.div.attrs({
  className: "flex pl-6 pr-4 py-3",
})``;

export const OverviewHeaderLabel = styled.span.attrs({
  className: "text-xl whitespace-nowrap text-black",
})``;

export const OverviewList = styled.div.attrs({ className: "flex flex-col" })``;

export const OverviewListItem = styled.div.attrs({
  className: "flex items-center justify-between pl-6 pr-4 py-3 cursor-pointer",
})``;

export const OverviewListItemName = styled.span.attrs({
  className: "text-black/60 whitespace-nowrap",
})``;

export const OverviewListItemRight = styled.div.attrs({
  className: "flex gap-5 items-center",
})``;

export const OverviewListItemValue = styled.span.attrs({
  className: "text-black whitespace-nowrap",
})``;
