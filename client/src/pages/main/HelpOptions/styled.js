import styled from 'styled-components';

export const HelpOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding: 2rem 5rem;
`;

export const HelpOption = styled.div`
    width: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    background: ${({ theme }) =>
      theme.colorMode === 'light' ? '#fff' : '#4b4949'};
    color: ${({ theme }) => (theme.colorMode === 'light' ? '#000' : '#d8d4d3')};

    & img {
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        ${({ theme }) =>
          theme.colorMode === 'light' ? 'none' : 'filter: brightness(70%)'};

        &:hover {
            transform: scale(1.15);
        }
    }


    & p {

        &:hover {
            color: #926E96;
        }
`;
