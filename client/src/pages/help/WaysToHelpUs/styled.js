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
  }
`;
