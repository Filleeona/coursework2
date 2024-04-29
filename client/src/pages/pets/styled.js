import styled from 'styled-components';

export const PetsContainer = styled.div``;

export const PetsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 2rem;
  justify-content: center;
`;

export const ColumnsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 0 2rem;
  gap: 4rem;
`;

export const InputsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 7rem;

  & > * {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 20px;
  }
`;

export const PetsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PetsColumnHeading = styled.h2`
  text-align: left;
`;

export const PetsVideoContainer = styled.div`
  display: flex;
  height: 60rem;
  padding: 4rem;

  & > iframe {
    flex-grow: 1;
  }
`;
