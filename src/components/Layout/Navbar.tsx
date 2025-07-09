'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '../../hooks/useScroll';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';

const NavbarContainer = styled(motion.nav)<{ $isScrolled: boolean }>`
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled
      ? '0 4px 20px rgba(0, 0, 0, 0.15)'
      : '0 2px 4px rgba(0, 0, 0, 0.05)'};

  /* Ensure fixed position behavior on scroll */
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(0);
  }
`;

const TopBar = styled.div`
  background: #ffffff;
  color: #333;
  padding: 8px 0;
  font-size: 14px;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
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
  gap: 25px;

  a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 14px;

    &:hover {
      color: #ed6664;
    }
  }
`;

const MainNav = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
    transform: none;
  }

  img {
    height: 40px;
    width: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 35px;
    }
  }

  h1 {
    font-size: 36px;
    font-weight: 600;
    color: #2c3e50;
    margin: 0;
    font-family: 'Dancing Script', cursive;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 32px;
      text-align: center;
    }
  }

  p {
    color: #7f8c8d;
    font-size: 14px;
    margin: 5px 0 0 0;
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      text-align: center;
    }
  }
`;

const Navigation = styled.div`
  display: flex;
  gap: 35px;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? '#ed6664' : '#2c3e50')};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  border-radius: 4px;

  &:hover {
    color: #ed6664;
  }

  &:focus {
    outline: 2px solid #ed6664;
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ed6664;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    &::after {
      width: 100%;
    }
  `}
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #2c3e50;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const HamburgerIcon = styled.div<{ $isOpen: boolean }>`
  width: 24px;
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background: #2c3e50;
    border-radius: 1px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  `}
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuDrawer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  max-width: 80vw;
  background: white;
  z-index: 1000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ecf0f1;
  margin-bottom: 20px;
`;

const MobileMenuTitle = styled.h3`
  margin: 0;
  color: #2c3e50;
  font-size: 18px;
  font-weight: 600;
`;

const MobileCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #2c3e50;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const MobileNavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? '#ed6664' : '#2c3e50')};
  text-decoration: none;
  font-weight: 500;
  padding: 16px 0;
  border-bottom: 1px solid #ecf0f1;
  transition: all 0.3s ease;
  border-radius: 4px;

  &:hover {
    color: #ed6664;
    background-color: rgba(237, 102, 100, 0.05);
  }

  &:focus {
    outline: 2px solid #ed6664;
    outline-offset: 2px;
    background-color: rgba(237, 102, 100, 0.1);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const NavWrapper = styled.div`
  position: relative;
`;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isScrolled } = useScroll(10);
  const focusTrapRef = useFocusTrap(isMenuOpen);

  // Enhanced keyboard navigation for mobile menu
  useKeyboardNavigation(focusTrapRef, {
    isOpen: isMenuOpen,
    onClose: () => setIsMenuOpen(false),
    onEscape: () => setIsMenuOpen(false),
    autoFocus: true,
    restoreFocus: true,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/bungalows', label: 'Bungalows' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <>
      <NavbarContainer
        $isScrolled={isScrolled}
        initial={false}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className={isScrolled ? 'fixed' : ''}
      >
        <TopBar>
          <TopBarContent>
            <ContactInfo>
              <a href="tel:+66092625572">📞 +66092625572</a>
              <a href="mailto:info@coconutbeachkohphangan.com">
                ✉️ info@coconutbeachkohphangan.com
              </a>
            </ContactInfo>
            <div style={{ color: '#ed6664' }}>
              📍 113/9 Moo 7, Koh Phangan, Surat Thani 84280, Thailand
            </div>
          </TopBarContent>
        </TopBar>

        <NavWrapper>
          <MainNav>
            <Logo>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <h1>Coconut Beach</h1>
              </Link>
            </Logo>

            <MobileMenuButton
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <HamburgerIcon $isOpen={isMenuOpen}>
                <span></span>
                <span></span>
                <span></span>
              </HamburgerIcon>
            </MobileMenuButton>

            <Navigation>
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  $isActive={pathname === link.href}
                >
                  {link.label}
                </NavLink>
              ))}
            </Navigation>
          </MainNav>
        </NavWrapper>
      </NavbarContainer>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <MobileMenuOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            <MobileMenuDrawer
              ref={focusTrapRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
            >
              <MobileMenuHeader>
                <MobileMenuTitle id="mobile-menu-title">Menu</MobileMenuTitle>
                <MobileCloseButton onClick={closeMenu} aria-label="Close menu">
                  ✕
                </MobileCloseButton>
              </MobileMenuHeader>

              <MobileNavLinks>
                {navigationLinks.map((link) => (
                  <MobileNavLink
                    key={link.href}
                    href={link.href}
                    $isActive={pathname === link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </MobileNavLink>
                ))}
              </MobileNavLinks>
            </MobileMenuDrawer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
