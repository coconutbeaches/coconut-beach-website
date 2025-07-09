'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

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
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
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
  padding: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Logo = styled.div`
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #2c3e50;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 24px;
      text-align: center;
    }
  }
  
  p {
    color: #7f8c8d;
    font-size: 14px;
    margin: 5px 0 0 0;
    
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const Navigation = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    gap: 20px;
  }
`;

const NavLink = styled.a`
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;
  
  &:hover {
    color: #3498db;
  }
  
  @media (max-width: 768px) {
    padding: 10px 0;
    border-bottom: 1px solid #ecf0f1;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #2c3e50;
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
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
