
'use client'

import styled from 'styled-components';
import ServiceCard from '@/components/ServiceCard';

const ServicesContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const servicesData = [
  {
    title: 'Integrações de Sistemas',
    description: 'Conectamos seus sistemas (pagamentos, ERPs, CRMs, APIs REST e SOAP) para otimizar seus processos.',
  },
  {
    title: 'Desenvolvimento Frontend',
    description: 'Criamos interfaces de usuário intuitivas e responsivas com as tecnologias mais modernas.',
  },
  {
    title: 'Desenvolvimento Backend',
    description: 'Desenvolvemos a lógica de negócio robusta e escalável para suas aplicações.',
  },
  {
    title: 'UI/UX Design',
    description: 'Projetamos experiências de usuário que encantam e convertem, com foco em usabilidade e acessibilidade.',
  },
  {
    title: 'Modernização de Aplicações Legadas',
    description: 'Transformamos seus sistemas antigos em soluções modernas, eficientes e seguras.',
  },
  {
    title: 'Automações em Geral',
    description: 'Automatizamos processos e tarefas repetitivas, como relatórios financeiros, processamento de dados, envio de e-mails e gestão de estoque, para aumentar a eficiência e reduzir custos operacionais.',
  },
  {
    title: 'Testes e Qualidade de Software',
    description: 'Garantimos a qualidade e a robustez de suas aplicações através de testes abrangentes, incluindo testes unitários, de integração, de aceitação e de performance, assegurando um software confiável e sem falhas.',
  },
];

export default function ServicesPage() {
  return (
    <ServicesContainer>
      <Title>Nossos Serviços</Title>
      <ServicesGrid>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
}
