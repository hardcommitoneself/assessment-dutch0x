import React from "react";

// components
import FeatureCard from "./FeatureCard";
import EventCard from "./EventCard";
import OverviewCard from "./OverviewCard";
import * as C from "./styles";

// icons
import { INFT, IHolder, IAirdrop, ITradeIn, ISales } from "@/common/svg";

// types
import { Event, EventStatus } from "@/types/event";
import { Overview } from "@/types/overview";

// mock data
const events: Event[] = [
  {
    id: 1,
    name: "Manure",
    image: "manure",
    description: "🍎🍌🍍The Fruit Salad Game🍆🥦🥕",
    amount: 100,
    transactions_s: 44,
    transactions_p: 8,
    transactions_f: 2,
    progress: 40,
    status: EventStatus.progress,
    started_at: 1677423135535,
  },
  {
    id: 2,
    name: "Water",
    image: "water",
    description: "🍎🍌🍍The Fruit Salad Game🍆🥦🥕",
    amount: 100,
    transactions_s: 100,
    transactions_p: 0,
    transactions_f: 0,
    progress: 100,
    status: EventStatus.done,
    started_at: 1677423115535,
  },
];

const overviews: Overview[] = [
  {
    items: [
      {
        name: "Wallet balance",
        value: "0.489 ETH",
      },
    ],
  },
  {
    title: "NFTs",
    items: [
      {
        name: "NFT items",
        value: "187",
      },
      {
        name: "Collections",
        value: "5",
      },
      {
        name: "Minted",
        value: "39",
      },
    ],
  },
  {
    title: "Saved Searches",
    items: [
      {
        name: "Green apple",
      },
      {
        name: "Christmas tree",
      },
    ],
  },
  {
    title: "Recent Activity",
    items: [
      {
        name: "Settings > Account",
      },
      {
        name: "Sales reports",
      },
    ],
  },
];

const Dashboard: React.FC = () => {
  return (
    <C.DashbaordWrapper>
      <C.Banner>
        <C.BannerInner>
          <FeatureCard variant="green" icon={INFT} label="NFT Management" />
          <FeatureCard variant="yellow" icon={IHolder} label="Find Holders" />
          <FeatureCard variant="sky" icon={IAirdrop} label="Airdrop" />
          <FeatureCard variant="purple" icon={ITradeIn} label="Trade-in" />
          <FeatureCard variant="red" icon={ISales} label="Sales" />
        </C.BannerInner>
      </C.Banner>

      <C.DashboardContent>
        <C.Events>
          <C.EventsHeader>Events</C.EventsHeader>
          <C.EventsContent>
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </C.EventsContent>
        </C.Events>

        <C.Overview>
          <C.OverviewHeader>Overview</C.OverviewHeader>
          <C.OverviewContent>
            {overviews.map((overview, index) => (
              <OverviewCard key={index} {...overview} />
            ))}
          </C.OverviewContent>
        </C.Overview>
      </C.DashboardContent>
    </C.DashbaordWrapper>
  );
};

export default Dashboard;
