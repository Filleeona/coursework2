import styled from 'styled-components';
import { Box } from '@chakra-ui/react';

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

export const WhoIsWaitingGridItem = styled(Box)`
  width: 20rem;
  height: 16rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 0.5rem;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-size: cover;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);

  & span {
    color: white;
    font-weight: 600;
    font-size: 1.25rem;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.3);
    padding: 4px 8px;
    border-radius: 15px;
    display: inline-block;
  }
`;
