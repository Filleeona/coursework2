import styled from 'styled-components';

export const HelpOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding: 2rem 5rem;
`;

export const HelpOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 80%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 20px;

  :hover {
    color: teal;
  }
`;
