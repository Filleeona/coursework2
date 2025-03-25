import styled from 'styled-components';

export const PetModalWrapper = styled.div`
  width: 60rem;
  max-width: 100%;
  height: 30rem;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: row;
`;

export const PetModalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1.7rem;
  font-weight: bold;
  border-bottom: 1px solid #e2e8f0;
  background: white;
  z-index: 11;
`;

export const PetModalBody = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding-top: 4rem;
`;

export const PetImageContainer = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PetImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const PetDetailsContainer = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PetTextBold = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
`;

export const PetText = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const PetCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #718096;
  z-index: 12;

  &:hover {
    color: #4a5568;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
