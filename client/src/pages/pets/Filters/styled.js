import styled from 'styled-components';
import { Checkbox } from '@chakra-ui/react';

export const BaseContainer = styled.div`
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#fff' : '#d8d4d3'};

  &:hover {
    transform: translateY(-2px);
  }
`;

export const BaseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
`;

export const CustomCheckbox = styled(Checkbox)`
  .chakra-checkbox__control {
    border-radius: 6px;
    border: 2px solid #d1d5db;
    transition: all 0.2s ease-in-out;
    background: #fff;

    &[data-checked] {
      background: #4a90e2;
      border-color: #4a90e2;
    }
  }

  .chakra-checkbox__label {
    font-size: 1rem;
    color: #4b5563;
    margin-left: 0.5rem;
  }
`;

export const CustomSliderThumb = styled.div`
  width: 20px;
  height: 20px;
  background: #4a90e2;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #718096;

  span {
    font-weight: 500;
  }

  span:nth-child(2) {
    color: #4a90e2;
    font-weight: 600;
  }
`;
