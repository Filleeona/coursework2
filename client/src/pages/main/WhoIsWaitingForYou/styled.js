import styled from 'styled-components';

export const WhoIsWaitingForYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10rem;
`;

export const WhoIsWaitingHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const WhoIsWaitingGridContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 2rem 4rem;
`;

export const WhoIsWaitingGridItem = styled.div`
  width: 10rem;
  height: 8rem;
  border-radius: 1rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 0.5rem;
`;