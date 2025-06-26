
'use client'

import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
}
