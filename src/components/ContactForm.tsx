import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { Button } from './Button';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

type FormData = yup.InferType<typeof schema>;

const FormContainer = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.backgrounds.primary};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.dark};
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid
    ${({ theme, hasError }) =>
      hasError ? theme.palette.danger : theme.backgrounds.light};
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.palette.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid
    ${({ theme, hasError }) =>
      hasError ? theme.palette.danger : theme.backgrounds.light};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: ${({ theme }) => theme.fonts.main};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.palette.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.palette.danger};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SuccessMessage = styled.p`
  color: ${({ theme }) => theme.palette.success};
  font-size: 0.875rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();

      // Hide success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        Contact Us
      </h2>

      {isSubmitted && (
        <SuccessMessage>
          Thank you! Your message has been sent successfully.
        </SuccessMessage>
      )}

      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          {...register('name')}
          id="name"
          type="text"
          placeholder="Enter your name"
          hasError={!!errors.name}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-required="true"
        />
        {errors.name && <ErrorMessage id="name-error" role="alert">{errors.name.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          {...register('email')}
          id="email"
          type="email"
          placeholder="Enter your email"
          hasError={!!errors.email}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-required="true"
        />
        {errors.email && <ErrorMessage id="email-error" role="alert">{errors.email.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <TextArea
          {...register('message')}
          id="message"
          placeholder="Enter your message"
          hasError={!!errors.message}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-required="true"
        />
        {errors.message && (
          <ErrorMessage id="message-error" role="alert">{errors.message.message}</ErrorMessage>
        )}
      </FormGroup>

      <Button
        type="submit"
        loading={isSubmitting}
        size="lg"
        style={{ width: '100%' }}
      >
        Send Message
      </Button>
    </FormContainer>
  );
};
