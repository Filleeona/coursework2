import styled from 'styled-components';
import { Image } from '@chakra-ui/react';

export const WaysToHelpUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#fff' : '#333031'};
`;

export const WaysToHelpUsHeading = styled.h2`
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#000' : '#9e9e9e')};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
`;

export const WaysToHelpUsImage = styled(Image)`
  height: 30rem;
  object-fit: contain;
  border-radius: 40px;
  ${({ theme }) => theme.colorMode === 'dark' && 'filter: brightness(80%);'}
`;

export const WaysToHelpUsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr 30rem;
  grid-template-rows: min-content min-content min-content;
  gap: 0rem;
  align-items: center;

  & > *:nth-child(1) {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
  }

  & > *:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  & > *:nth-child(2) *,
  & > *:nth-child(4) *,
  & > *:nth-child(6) * {
    text-align: right;
  }

  & .h4 {
    font-size: 1rem;
    line-height: 24px;
  }
`;

export const WaysToHelpUsCommonInfo = styled.div`
  margin-top: 3rem;
  padding: 0 4rem;

  .h4 {
    text-align: center;
    font-size: 1.1rem;
    color: ${({ theme }) => (theme.colorMode === 'light' ? '#000' : '#757575')};
  }
`;
