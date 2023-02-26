import React from "react";

// components
import * as C from "./styles";

// icons
import { IArrowRight } from "@/common/svg";

// types
import { OverviewItem } from "@/types/overview";

interface OverviewCardProps {
  title?: string;
  items: OverviewItem[];
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, items }) => {
  const isTitle = !!title;

  return (
    <C.OverviewWrapper>
      {isTitle && (
        <C.OverviewHeader>
          <C.OverviewHeaderLabel>{title}</C.OverviewHeaderLabel>
        </C.OverviewHeader>
      )}

      <C.OverviewList>
        {items.map((item) => (
          <C.OverviewListItem key={item.name}>
            <C.OverviewListItemName>{item.name}</C.OverviewListItemName>
            <C.OverviewListItemRight>
              {item.value && (
                <C.OverviewListItemValue>{item.value}</C.OverviewListItemValue>
              )}
              <IArrowRight />
            </C.OverviewListItemRight>
          </C.OverviewListItem>
        ))}
      </C.OverviewList>
    </C.OverviewWrapper>
  );
};

export default OverviewCard;
