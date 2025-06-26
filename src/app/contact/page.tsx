'use client'

import styled from 'styled-components';
import React from "react";
// import ContactForm from '@/components/ContactForm'; // Não será mais necessário

const ContactPageContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

const GoogleFormIframe = styled.iframe`
  width: 100%;
  max-width: 700px; /* Ajuste conforme necessário */
  height: 800px; /* Ajuste conforme necessário */
  border: none;
  margin: 0 auto;
  display: block; /* Para centralizar com max-width e margin auto */
`;

export default function ContactPage() {
  return (
    <ContactPageContainer>
      <Title>Entre em Contato</Title>
      <GoogleFormIframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd1kFfEmg3Dgb9UOBF8uShbltVquFnGFiHwvZ2XYRqTS5QmBg/viewform?embedded=true"
        width="640"
        height="800"
      >
        Carregando…
      </GoogleFormIframe>
    </ContactPageContainer>
  );
}
