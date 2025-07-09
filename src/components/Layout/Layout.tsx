'use client';

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
