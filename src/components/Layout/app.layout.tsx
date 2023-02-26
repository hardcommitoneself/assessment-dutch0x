import React from "react";
import styled from "styled-components";

// components
import { Header } from "./Header";
import { Footer } from "./Footer";

const AppWrapper = styled.div.attrs({ className: "" })``;

const AppLayout: React.FC = () => {
  return (
    <AppWrapper>
      <Header />
      <Footer />
    </AppWrapper>
  );
};

export default AppLayout;
