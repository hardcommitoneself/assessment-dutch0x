import React from "react";

// components
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AppWrapper, ContentWrapper } from "./styles";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </AppWrapper>
  );
};

export default AppLayout;
