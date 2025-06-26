
'use client'

import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.body};
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.a`
  padding: 1rem 2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <Title>Transformando Ideias em Soluções Digitais</Title>
      <Subtitle>Consultoria técnica especializada em integrações, desenvolvimento e modernização de sistemas.</Subtitle>
      <CTAButton href="/contact">Entre em Contato</CTAButton>
    </HeroContainer>
  );
}
