import React from "react";

// components
import FeatureCard from "./FeatureCard";
import * as C from "./styles";

// icons
import { INFT, IHolder, IAirdrop, ITradeIn, ISales } from "@/common/svg";

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
    </C.DashbaordWrapper>
  );
};

export default Dashboard;
