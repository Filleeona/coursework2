import styled from 'styled-components';
import { Image } from '@chakra-ui/react';

export const WaysToHelpUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
`;

export const WaysToHelpUsHeading = styled.h2`
  color: black;
`;

export const WaysToHelpUsImage = styled(Image)`
  height: 30rem;
  object-fit: contain;
`;
