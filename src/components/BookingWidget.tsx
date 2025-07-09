'use client';

import React from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/navigation';
import { darken } from 'polished';

interface FormData {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
}

const BookingWidgetContainer = styled.div`
  position: absolute;
  top: 120px;
  right: 50px;
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: 100;
  width: 320px;
  font-family: ${({ theme }) => theme.fonts.main};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: relative;
    top: 0;
    right: 0;
    margin: ${({ theme }) => theme.spacing.lg} auto;
    width: calc(100% - 2rem);
    max-width: 400px;
  }
`;

const FormField = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  font-size: ${({ theme }) => theme.sizes.sm};
`;

const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
  
  .react-datepicker__input-container input {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm};
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    font-size: ${({ theme }) => theme.sizes.sm};
    font-family: ${({ theme }) => theme.fonts.main};
    
    &:focus {
      border-color: ${({ theme }) => theme.palette.coral};
      outline: none;
      box-shadow: 0 0 0 3px rgba(237, 102, 100, 0.1);
    }
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.sizes.sm};
  font-family: ${({ theme }) => theme.fonts.main};
  background: white;
  
  &:focus {
    border-color: ${({ theme }) => theme.palette.coral};
    outline: none;
    box-shadow: 0 0 0 3px rgba(237, 102, 100, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.palette.coral};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: ${({ theme }) => theme.sizes.md};
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.main};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.sm};

  &:hover {
    background: ${({ theme }) => darken(0.1, theme.palette.coral)};
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const WidgetTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.palette.coral};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.sizes.xl};
  text-align: center;
`;

const BookingWidget: React.FC = () => {
  const { control, handleSubmit, watch } = useForm<FormData>();
  const router = useRouter();

  const checkInDate = watch('checkIn');

  const onSubmit = (data: FormData) => {
    const { checkIn, checkOut, guests } = data;
    if (!checkIn || !checkOut) {
      return; // Form validation should prevent this
    }
    const queryParams = new URLSearchParams({
      checkIn: checkIn.toISOString(),
      checkOut: checkOut.toISOString(),
      guests: guests.toString(),
    });
    router.push(`/bungalows?${queryParams.toString()}`);
  };

  return (
    <BookingWidgetContainer>
      <WidgetTitle>Book Your Stay</WidgetTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Label>Check-in Date</Label>
          <Controller
            name="checkIn"
            control={control}
            defaultValue={null}
            rules={{ required: 'Please select a check-in date' }}
            render={({ field }) => (
              <DatePickerWrapper>
                <DatePicker
                  placeholderText="Select check-in date"
                  selected={field.value}
                  onChange={field.onChange}
                  minDate={new Date()}
                  dateFormat="MMM dd, yyyy"
                />
              </DatePickerWrapper>
            )}
          />
        </FormField>
        <FormField>
          <Label>Check-out Date</Label>
          <Controller
            name="checkOut"
            control={control}
            defaultValue={null}
            rules={{ 
              required: 'Please select a check-out date',
              validate: value => {
                if (!checkInDate || !value) return true;
                return value > checkInDate || 'Check-out must be after check-in';
              }
            }}
            render={({ field }) => (
              <DatePickerWrapper>
                <DatePicker
                  placeholderText="Select check-out date"
                  selected={field.value}
                  onChange={field.onChange}
                  minDate={checkInDate || new Date()}
                  dateFormat="MMM dd, yyyy"
                />
              </DatePickerWrapper>
            )}
          />
        </FormField>
        <FormField>
          <Label>Guests</Label>
          <Controller
            name="guests"
            control={control}
            defaultValue={1}
            render={({ field }) => (
              <StyledSelect {...field}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                  <option key={number} value={number}>
                    {number} {number === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </StyledSelect>
            )}
          />
        </FormField>
        <SubmitButton type="submit">Book Now</SubmitButton>
      </form>
    </BookingWidgetContainer>
  );
};

export default BookingWidget;
