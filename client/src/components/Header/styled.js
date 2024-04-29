import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: white;
  position: sticky;
  top: 0;
  z-index: 100; // Header should be over everything.
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1.5rem;
`;
