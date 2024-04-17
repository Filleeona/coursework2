import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const NvBox = styled.div`
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

export const PetBox = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  alignItems: center;
  justifyContent: center;
  flex-direction: column;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;