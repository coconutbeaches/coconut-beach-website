import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  padding?: 'sm' | 'md' | 'lg';
  elevation?: 'sm' | 'md' | 'lg';
  className?: string;
  role?: string;
  tabIndex?: number;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

const StyledCard = styled(motion.div)<CardProps>`
  background-color: ${({ theme }) => theme.backgrounds.primary};
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  /* Padding variants */
  ${({ padding }) => {
    switch (padding) {
      case 'sm':
        return `padding: 1rem;`;
      case 'lg':
        return `padding: 2rem;`;
      default:
        return `padding: 1.5rem;`;
    }
  }}
  
  /* Elevation variants */
  ${({ elevation, theme }) => {
    switch (elevation) {
      case 'sm':
        return `box-shadow: ${theme.shadows.sm};`;
      case 'lg':
        return `box-shadow: ${theme.shadows.lg};`;
      default:
        return `box-shadow: ${theme.shadows.md};`;
    }
  }}
  
  /* Hoverable styles */
  ${({ hoverable, clickable, theme }) => {
    if (hoverable || clickable) {
      return `
        &:hover {
          transform: translateY(-4px);
          box-shadow: ${theme.shadows.lg};
          cursor: ${clickable ? 'pointer' : 'default'};
        }
        
        &:active {
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.md};
        }
      `;
    }
    return '';
  }}
  
  /* Focus styles for clickable cards */
  ${({ clickable, theme }) => {
    if (clickable) {
      return `
        &:focus {
          outline: 2px solid ${theme.palette.primary};
          outline-offset: 2px;
        }
        
        &:focus:not(:focus-visible) {
          outline: none;
        }
        
        &:focus-visible {
          outline: 2px solid ${theme.palette.primary};
          outline-offset: 2px;
        }
      `;
    }
    return '';
  }}
`;

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = false,
  clickable = false,
  onClick,
  padding = 'md',
  elevation = 'md',
  className,
  role,
  tabIndex,
  ...ariaProps
}) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (clickable && onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <StyledCard
      hoverable={hoverable}
      clickable={clickable}
      padding={padding}
      elevation={elevation}
      className={className}
      onClick={clickable ? onClick : undefined}
      onKeyDown={clickable ? handleKeyDown : undefined}
      role={clickable ? (role || 'button') : role}
      tabIndex={clickable ? (tabIndex ?? 0) : tabIndex}
      whileHover={hoverable || clickable ? { y: -4 } : undefined}
      whileTap={clickable ? { y: -2 } : undefined}
      {...ariaProps}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
