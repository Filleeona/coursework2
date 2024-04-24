import styled from 'styled-components';

export const PetsContainer = styled.div``;

export const PetsGridContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 2rem;
  justify-content: center;
`;

export const ColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 0 2rem;
  gap: 4rem;
`;

export const InputsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PetsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
