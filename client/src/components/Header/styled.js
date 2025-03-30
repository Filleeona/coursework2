import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 2.5rem;
  font-weight: 500;
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#f7fafc' : '#333031'};
`;
