import styled from 'styled-components';
import { Box } from '@chakra-ui/react';

export const FindYourPetContainer = styled.div`
  width: 100%;
  height: 25rem;
`;

export const FindYourPetWrapper = styled(Box)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: 0 10rem;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FindYourPetImage = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  filter: brightness(0.9);
  background-size: cover;
  background-position: center;
`;

export const FindYourPetContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 40%;
  z-index: 1; // Anything more than 0.
`;
