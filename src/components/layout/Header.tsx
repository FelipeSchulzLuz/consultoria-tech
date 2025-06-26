
'use client'

import Link from 'next/link';
import styled from 'styled-components';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  border-bottom: 1px solid ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    text-align: center;
    margin-top: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const ThemeToggleButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    order: 1; /* Coloca o botão antes do título no mobile */
  }
`;

const Logo = styled(NavLink)`
  @media (max-width: 768px) {
    order: 2; /* Coloca o título depois do botão no mobile */
    flex-grow: 1; /* Ocupa o espaço restante */
    text-align: center;
  }
`;

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <MobileMenuButton onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </MobileMenuButton>
      <Logo href="/">ConsultoriaTech</Logo>
      <Nav $isOpen={isOpen}>
        <NavLink href="/services" onClick={() => setIsOpen(false)}>Serviços</NavLink>
        <NavLink href="/portfolio" onClick={() => setIsOpen(false)}>Portfólio</NavLink>
        <NavLink href="/about" onClick={() => setIsOpen(false)}>Sobre Nós</NavLink>
        <NavLink href="/contact" onClick={() => setIsOpen(false)}>Contato</NavLink>
      </Nav>
      <ThemeToggleButton onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </ThemeToggleButton>
    </HeaderContainer>
  );
}
