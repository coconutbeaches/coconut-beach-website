'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { mediaQuery, responsiveFontSizes, responsiveSpacing } from '../styles/responsive';

const HeaderContainer = styled.header`
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TopBar = styled.div`
  background: #2c3e50;
  color: white;
  padding: 8px 0;
  font-size: 14px;
  
  ${mediaQuery.md`
    display: none;
  `}
`;

const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${responsiveSpacing.container}
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 30px;
  
  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      color: #3498db;
    }
  }
`;

const MainHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${responsiveSpacing.container}
  padding-top: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  
  ${mediaQuery.md`
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
  `}
`;

const Logo = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.sizes['2xl']};
    font-weight: 700;
    color: #2c3e50;
    margin: 0;
    
    ${mediaQuery.lg`
      font-size: ${({ theme }) => theme.sizes.xl};
    `}
    
    ${mediaQuery.md`
      font-size: ${({ theme }) => theme.sizes.lg};
      text-align: center;
    `}
    
    ${mediaQuery.sm`
      font-size: ${({ theme }) => theme.sizes.md};
    `}
  }
  
  p {
    color: #7f8c8d;
    font-size: ${({ theme }) => theme.sizes.sm};
    margin: 5px 0 0 0;
    
    ${mediaQuery.md`
      text-align: center;
    `}
    
    ${mediaQuery.xs`
      font-size: ${({ theme }) => theme.sizes.xs};
    `}
  }
`;

const Navigation = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  
  ${mediaQuery.md`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    box-shadow: ${({ theme }) => theme.shadows.md};
    padding: ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.lg};
  `}
`;

const NavLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  font-size: ${({ theme }) => theme.sizes.md};
  transition: color 0.3s;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.palette.coral};
  }
  
  ${mediaQuery.md`
    padding: ${({ theme }) => theme.spacing.sm} 0;
    border-bottom: 1px solid #ecf0f1;
    
    &:last-child {
      border-bottom: none;
    }
  `}
  
  ${mediaQuery.sm`
    font-size: ${({ theme }) => theme.sizes.sm};
  `}
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.sizes.lg};
  cursor: pointer;
  color: #2c3e50;
  padding: ${({ theme }) => theme.spacing.xs};
  
  ${mediaQuery.md`
    display: block;
    position: absolute;
    right: ${({ theme }) => theme.spacing.lg};
    top: ${({ theme }) => theme.spacing.lg};
  `}
`;

const HeaderWrapper = styled.div`
  position: relative;
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <TopBar>
        <TopBarContent>
          <ContactInfo>
            <a href="tel:+66812345678">📞 +66 81 234 5678</a>
            <a href="mailto:info@coconutbeachkohphangan.com">✉️ info@coconutbeachkohphangan.com</a>
          </ContactInfo>
          <div>📍 Salad Beach, Koh Phangan, Thailand</div>
        </TopBarContent>
      </TopBar>
      
      <HeaderWrapper>
        <MainHeader>
          <Logo>
            <h1>Coconut Beach Bungalows</h1>
            <p>Eco-friendly beachfront accommodation in Koh Phangan</p>
          </Logo>
          
          <MobileMenuButton onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
          
          <Navigation isOpen={isMenuOpen}>
            <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink onClick={() => scrollToSection('bungalows')}>Bungalows</NavLink>
            <NavLink onClick={() => scrollToSection('reviews')}>Reviews</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </Navigation>
        </MainHeader>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
