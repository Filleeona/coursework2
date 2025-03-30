import styled from 'styled-components';
import { Image } from '@chakra-ui/react';

export const PetItemContainer = styled.div`
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: transform 0.2s ease-in-out;
  text-align: center;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#fff' : '#656263'};

  &:hover {
    transform: translateY(-2px);
  }
`;

export const PetImage = styled(Image)`
  height: 20rem;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const PetItemHeading = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.6rem 0;
  color: ${({ theme }) => (theme.colorMode === 'dark' ? '#000' : '#2d3748')};
`;

export const PetDescription = styled.p`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  color: ${({ theme }) => (theme.colorMode === 'dark' ? '#000' : '#4b5563')};
`;

export const PetDetails = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => (theme.colorMode === 'dark' ? '#333031' : '#718096')};

  span {
    margin-right: 0.5rem;
  }

  span:last-child {
    margin-right: 0;
  }
`;
