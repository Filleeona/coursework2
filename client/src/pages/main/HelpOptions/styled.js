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
    padding: 1rem 2rem;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    border-radius: 20px;

    & img {
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

        &:hover {
            transform: scale(1.15);
        }
    }


    & p {

        &:hover {
            color: #926E96;
        }
`;
