'use client';

import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  min-height: calc(100vh - 160px); /* Adjust based on header/footer height */
  flex: 1;
  width: 100%;
`;

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
