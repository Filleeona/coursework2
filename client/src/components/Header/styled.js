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

export const Button = styled.button`
  background: ${({ theme }) =>
    theme.colorMode === 'light'
      ? 'linear-gradient(to right, #a0aec0, #cbd5e0)'
      : 'linear-gradient(to right, #4a5568, #718096)'};
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#fff' : '#d8d4d3')};
  font-weight: bold;
  font-size: 0.875rem;
  border: none;
  border-radius: 99px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    filter: brightness(1.03);
  }

  &:active {
    transform: scale(0.98);
  }
`;
