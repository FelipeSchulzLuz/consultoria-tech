
'use client'

import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} ConsultoriaTech. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}
