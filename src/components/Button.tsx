import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const StyledButton = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  /* Size variants */
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
      case 'lg':
        return `
          padding: 1rem 2rem;
          font-size: 1.125rem;
        `;
      default:
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
    }
  }}

  /* Color variants */
  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return `
          background-color: ${theme.palette.secondary};
          color: ${theme.text.light};
          
          &:hover:not(:disabled) {
            background-color: ${theme.backgrounds.dark};
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.palette.primary};
          border-color: ${theme.palette.primary};
          
          &:hover:not(:disabled) {
            background-color: ${theme.palette.primary};
            color: ${theme.text.light};
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(237, 102, 100, 0.25);
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(237, 102, 100, 0.15);
          }
        `;
      default:
        return `
          background-color: ${theme.palette.primary};
          color: ${theme.text.light};
          box-shadow: 0 2px 4px rgba(237, 102, 100, 0.2);
          
          &:hover:not(:disabled) {
            background-color: ${theme.palette.info};
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(237, 102, 100, 0.3);
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(237, 102, 100, 0.2);
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.palette.primary};
    outline-offset: 2px;
    box-shadow: 0 0 0 4px rgba(237, 102, 100, 0.1);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.primary};
    outline-offset: 2px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  style,
  children,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      style={style}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </StyledButton>
  );
};
