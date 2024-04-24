import styled from 'styled-components';
import { Image } from '@chakra-ui/react';

export const PetItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PetImage = styled(Image)`
  height: 20rem;
  object-fit: cover;
`;

export const PetItemHeading = styled.h4`
  text-align: left;
  margin-top: 0.6rem;
`;
