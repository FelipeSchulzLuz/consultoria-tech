
'use client'

import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;


const TeamMemberCard = styled.div`
  background-color: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MemberImagePlaceholder = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ccc; /* Cor de placeholder */
  border-radius: 50%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.8rem;
  border: 1px dashed ${({ theme }) => theme.text};
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const teamMembers = [
  {
    name: 'Felipe Schulz',
    role: 'CEO & Arquiteto de Soluções',
    image: '/images/felipe.jpg', // Placeholder para a imagem
  },
  {
    name: 'Bruno Fraga',
    role: 'Líder de Desenvolvimento Backend e Qualidade (QA)',
    image: '/images/bruno.jpg', // Placeholder para a imagem
  },
  {
    name: 'Guilherme Schulz',
    role: 'Líder de Desenvolvimento Frontend e UI/UX',
    image: '/images/guilherme.jpg', // Placeholder para a imagem
  },
  {
    name: 'Wagner Burgie',
    role: 'Líder de Desenvolvimento Fullstack',
    image: '/images/wagner.jpg', // Placeholder para a imagem
  },
];

export default function AboutPage() {
  return (
    <AboutContainer>
      <Title>Nosso Time Multidisciplinar</Title>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index}>
            <MemberImagePlaceholder>Foto aqui</MemberImagePlaceholder>
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </TeamMemberCard>
        ))}
      </TeamGrid>
    </AboutContainer>
  );
}

