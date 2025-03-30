import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 7rem;
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#926e96' : '#1c1a1b'};
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#000' : '#d8d4d3')};
`;
