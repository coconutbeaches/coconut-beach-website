'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { mediaQuery, responsiveSpacing } from '../styles/responsive';

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
    gap: 1.5rem;
  `}
`;

const Logo = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin: 0;

    ${mediaQuery.lg`
      font-size: 1.25rem;
    `}

    ${mediaQuery.md`
      font-size: 1.125rem;
      text-align: center;
    `}
    
    ${mediaQuery.sm`
      font-size: 1rem;
    `}
  }

  p {
    color: #7f8c8d;
    font-size: 0.875rem;
    margin: 5px 0 0 0;

    ${mediaQuery.md`
      text-align: center;
    `}

    ${mediaQuery.xs`
      font-size: 0.75rem;
    `}
  }
`;

const Navigation = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 991px) {
    display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

const NavLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #ed6664;
  }

  @media (max-width: 991px) {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ecf0f1;

    &:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 767px) {
    font-size: 0.875rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.125rem;
  cursor: pointer;
  color: #2c3e50;
  padding: 0.25rem;

  @media (max-width: 991px) {
    display: block;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
  }
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
            <a href="mailto:info@coconutbeachkohphangan.com">
              ✉️ info@coconutbeachkohphangan.com
            </a>
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
            <NavLink onClick={() => scrollToSection('bungalows')}>
              Bungalows
            </NavLink>
            <NavLink onClick={() => scrollToSection('reviews')}>
              Reviews
            </NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>
              Contact
            </NavLink>
          </Navigation>
        </MainHeader>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
