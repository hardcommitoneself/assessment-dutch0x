import React from "react";
import moment from "moment";

// components
import * as C from "./styles";
import { Progress, Button, Checkbox } from "@/common";

// icons
import { ICheck, ILoader, IDate, IClock } from "@/common/svg";

// types
import { EventStatus } from "@/types/event";

interface EventCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  amount: number;
  transactions_s: number;
  transactions_p: number;
  transactions_f: number;
  progress: number;
  status: EventStatus;
  started_at: number;
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  image,
  description,
  amount,
  transactions_s,
  transactions_p,
  transactions_f,
  progress,
  status,
  started_at,
}) => {
  return (
    <C.EventCardWrapper>
      <C.EventCardInner>
        <C.EventCardDetail>
          {/* header */}
          <C.EventCardHeader>
            {/* status */}
            <C.EventCardStatusBadge status={status}>
              {status === EventStatus.done ? <ICheck /> : <ILoader />}
              <C.EventCardStatusBadgeLabel>Airdrop</C.EventCardStatusBadgeLabel>
            </C.EventCardStatusBadge>

            {/* date */}
            <C.EventCardDate>
              <IDate />
              <C.EventCardDateLabel>
                {status === EventStatus.done ? "It's Raining" : "Harvest"}
              </C.EventCardDateLabel>
            </C.EventCardDate>

            {/* started date */}
            <C.EventCardStartedDate>
              <IClock />
              <C.EventCardStartedDateLabel>
                Started &nbsp;&nbsp;
                <C.EventCardStartedDateTimeLabel>
                  {moment(started_at).format("YYYY-MM-DD h:mm:ss")}
                </C.EventCardStartedDateTimeLabel>
              </C.EventCardStartedDateLabel>
            </C.EventCardStartedDate>
          </C.EventCardHeader>

          {/* description */}
          <C.EventCardDescription>{description}</C.EventCardDescription>

          {/* name x amount */}
          <C.EventCardNameAndAmount>
            <C.EventCardName>{name}</C.EventCardName>
            <C.EventCardAmount>x {amount}</C.EventCardAmount>
          </C.EventCardNameAndAmount>

          {/* transactions */}
          <C.EventCardTransactions>
            <span>Wallet Transactions:</span>
            <span>
              <C.EventCardTransactionAmountLabel>
                {transactions_s}
              </C.EventCardTransactionAmountLabel>{" "}
              Success
            </span>
            <span>
              <C.EventCardTransactionAmountLabel>
                {transactions_p}
              </C.EventCardTransactionAmountLabel>{" "}
              Processing
            </span>
            <span>
              <C.EventCardTransactionAmountLabel>
                {transactions_f}
              </C.EventCardTransactionAmountLabel>{" "}
              Failed
            </span>
          </C.EventCardTransactions>

          {/* progress */}
          <C.EventCardProgress>
            <Progress percent={progress} />
          </C.EventCardProgress>

          {/* tools */}
          <C.EventCardTools>
            <Button variant="solid" lablel="More Details" />
            {status === EventStatus.progress && (
              <>
                <Button variant="outline" lablel="Cancel" />
                <Checkbox checked={true} label="Receive report on email" />
              </>
            )}
          </C.EventCardTools>
        </C.EventCardDetail>

        {/* image */}
        <C.EventCardImage
          src={`/images/events/${image}.png`}
          width={300}
          height={216}
          alt={image}
        />
      </C.EventCardInner>

      {/* back image */}
      <C.EventCardBackImage
        src={`/images/events/${image}.png`}
        width={600}
        height={600}
        alt={`back-${image}`}
      />
    </C.EventCardWrapper>
  );
};

export default EventCard;
