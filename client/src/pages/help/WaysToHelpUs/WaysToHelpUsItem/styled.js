import styled from 'styled-components';

export const Heading3 = styled.h3`
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#000' : '#9e9e9e')};
  margin-bottom: 0.5rem;
`;

export const Heading4 = styled.h4`
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#000' : '#757575')};
`;
