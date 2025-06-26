
'use client'

import styled from 'styled-components';
import PortfolioCard from '@/components/PortfolioCard';

const PortfolioContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const DescriptionText = styled.p`
  max-width: 800px;
  margin: 0 auto 2rem auto;
  color: ${({ theme }) => theme.text};
`;

const portfolioData = [
  {
    title: 'Aplicativo Omnichannel com IA e Automação',
    description: 'Participação na evolução e implementação de melhorias e novas funcionalidades em um aplicativo mobile omnichannel com milhões de downloads, integrando e-commerce, IA (busca inteligente, assistente virtual) e automações. Foco em performance e experiência do usuário, resultando em +20% na retenção de usuários e redução de chamados com alertas automatizados. Utilizamos React Native, TypeScript e Firebase, com práticas de Clean Code, Acessibilidade, DevOps e CI/CD para um deploy mobile otimizado.',
  },
  {
    title: 'Plataforma de Agendamentos e Logística',
    description: 'Criação de uma interface intuitiva para controle de coletas e gestão de docas, utilizando React. Esta solução otimizou a logística, reduzindo falhas e integrando-se perfeitamente a sistemas internos, com foco em Clean Architecture e testes robustos (Jest, Cypress).',
  },
  {
    title: 'Plataforma de Fornecedores e Governança de Verbas',
    description: 'Desenvolvimento de uma plataforma robusta para gestão de fornecedores e governança de verbas, otimizando processos e garantindo conformidade. A solução foi construída com React, Node.js e Java (Spring), utilizando Docker para orquestração e seguindo princípios de Clean Code, DevOps e CI/CD.',
  },
  {
    title: 'Sistema de Pagamentos Integrado',
    description: 'Implementação de uma plataforma de pagamentos segura e eficiente, com integração a múltiplos gateways e ERPs, utilizando Node.js e Java (Spring) para APIs REST escaláveis.',
  },
  {
    title: 'E-commerce B2B Modernizado',
    description: 'Modernização completa de um sistema legado de e-commerce B2B, transformando-o em uma solução de alta performance e excelente experiência do usuário, com arquitetura baseada em microsserviços e tecnologias como React e Node.js.',
  },
  {
    title: 'API RESTful para CRM',
    description: 'Criação de uma API RESTful robusta e segura para integração de dados de clientes com um CRM, facilitando a comunicação entre sistemas e otimizando a gestão de relacionamento. Desenvolvida com Node.js.',
  },
  {
    title: 'Dashboard Analítico Interativo',
    description: 'Desenvolvimento de um dashboard frontend interativo para visualização de dados de vendas, proporcionando insights claros e acionáveis para a tomada de decisões estratégicas. Construído com React e D3.js.',
  },
  {
    title: 'Otimização de Performance Backend',
    description: 'Refatoração e otimização de microsserviços backend, resultando em ganhos significativos de performance e escalabilidade para sistemas críticos. Utilização de Java (Spring) e Node.js com Docker para ambientes eficientes.',
  },
];

export default function PortfolioPage() {
  return (
    <PortfolioContainer>
      <Title>Nosso Portfólio</Title>
      <DescriptionText>
        Apresentamos alguns projetos e experiências relevantes que demonstram a expertise e a capacidade técnica de nossa equipe. Muitos desses projetos foram desenvolvidos pelos nossos especialistas em suas carreiras anteriores, contribuindo para a vasta experiência que hoje oferecemos em consultoria.
      </DescriptionText>
      <PortfolioGrid>
        {portfolioData.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </PortfolioGrid>
    </PortfolioContainer>
  );
}
