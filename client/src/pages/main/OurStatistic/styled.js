import styled from 'styled-components';

export const OurStatisticContainer = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: ${({ theme }) =>
    theme.colorMode === 'light' ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.6)'};
`;

export const OurStatisticContentWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;
`;
