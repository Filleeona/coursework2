import styled from 'styled-components';

export const PetsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#f7fafc' : '#333031'};
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#000' : '#d8d4d3')};
`;

export const PetsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 100%;
  justify-content: center;
`;

export const ColumnsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100%;
`;

export const InputsColumn = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  left: 0;
  top: 4rem;
  width: 60rem;
  z-index: 10;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#f7fafc' : '#656263'};

  & > * {
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
    height: 10rem;
    width: 32%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const PetsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const PetsColumnHeading = styled.h2`
  text-align: left;
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#000' : '#d8d4d3')};
  text-shadow: ${({ theme }) =>
    theme.colorMode === 'light' ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.6)'};
`;

export const PetsVideoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60rem;
  padding: 4rem;

  & > iframe {
    flex-grow: 1;
  }
`;
