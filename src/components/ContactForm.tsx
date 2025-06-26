
'use client'

import styled from 'styled-components';
import React, { useState } from 'react';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FormContainer action="https://formspree.io/f/YOUR_FORMSPREE_FORM_ID" method="POST">
      <Input
        type="text"
        name="name"
        placeholder="Seu Nome"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Seu Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextArea
        name="message"
        placeholder="Sua Mensagem"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit">Enviar Mensagem</Button>
    </FormContainer>
  );
}
