'use client'

import styled from 'styled-components';
import React from "react";

const ContactPageContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const GoogleFormIframe = styled.iframe`
  width: 100%;
  max-width: 700px;
  height: 800px;
  border: none;
  margin: 0 auto;
  display: block;
`;

export default function ContactPage() {
  return (
    <ContactPageContainer>
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
