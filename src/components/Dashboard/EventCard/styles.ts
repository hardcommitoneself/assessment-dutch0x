import styled from "styled-components";
import Image from "next/image";
import { EventStatus } from "@/types/event";

interface EventCardStatusBadgeProps {
  status: EventStatus;
}

const eventStatusPallate = {
  done: "background-color: #28458F;",
  progress: "background-color: #3CAA2A",
};

export const EventCardWrapper = styled.div.attrs({
  className: "relative overflow-hidden",
})``;

export const EventCardInner = styled.div.attrs({
  className:
    "relative flex gap-8 bg-white/80 backdrop-blur-xl rounded-lg shadow-md overflow-hidden",
})``;

export const EventCardDetail = styled.div.attrs({
  className: "relative flex py-6 pl-6 flex-col grow",
})``;

export const EventCardHeader = styled.div.attrs({
  className: "flex items-center gap-2",
})``;

export const EventCardStatusBadge = styled.div.attrs({
  className: "flex items-center gap-1 pl-6 pr-2 rounded-r-lg h-7 -ml-6",
})`
  ${(p: EventCardStatusBadgeProps) => eventStatusPallate[p.status]}
`;

export const EventCardStatusBadgeLabel = styled.span.attrs({
  className: "text-xs whitespace-nowrap font-bold text-white uppercase mt-0.5",
})``;

export const EventCardDate = styled.div.attrs({
  className:
    "flex items-center gap-2.5 px-2.5 h-7 bg-black/10 backdrop-blur-xl rounded-lg",
})``;

export const EventCardDateLabel = styled.span.attrs({
  className: "text-sm whitespace-nowrap font-bold text-black",
})``;

export const EventCardStartedDate = styled.div.attrs({
  className: "flex items-center gap-2.5 text-black/70 px-3",
})``;

export const EventCardStartedDateLabel = styled.span.attrs({
  className: "text-sm whitespace-nowrap font-bold",
})``;

export const EventCardStartedDateTimeLabel = styled.span.attrs({
  className: "font-normal",
})``;

export const EventCardDescription = styled.p.attrs({ className: "mt-3" })``;

export const EventCardNameAndAmount = styled.div.attrs({
  className: "flex items-end gap-2.5 mt-2",
})``;

export const EventCardName = styled.h1.attrs({
  className: "text-3xl whitepsace-nowrap font-bold leading-none",
})``;

export const EventCardAmount = styled.span.attrs({
  className: "text-sm whitespace-nowrap",
})``;

export const EventCardTransactions = styled.div.attrs({
  className: "flex items-center gap-4 text-sm mt-3",
})``;

export const EventCardTransactionAmountLabel = styled.span.attrs({
  className: "font-bold",
})``;

export const EventCardProgress = styled.div.attrs({
  className: "mt-3",
})``;

export const EventCardImage = styled(Image).attrs({
  className: "py-6 pr-6",
})`
  width: 300px;
`;

export const EventCardTools = styled.div.attrs({
  className: "flex items-center gap-2 mt-4",
})``;

export const EventCardBackImage = styled(Image).attrs({
  className: "absolute left-1/2 top-0 -translate-x-1/2 -z-10",
})``;
