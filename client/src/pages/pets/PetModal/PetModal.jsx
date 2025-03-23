import {
  PetModalWrapper,
  PetModalHeader,
  PetModalBody,
  PetImageContainer,
  PetImage,
  PetDetailsContainer,
  PetTextBold,
  PetText,
  PetCloseButton,
} from './styled.js';
import {
  Modal,
  ModalOverlay,
  ModalContent as ChakraModalContent,
} from '@chakra-ui/react';
import { Size } from '../../../constants.js';

export default function PetModal({ isOpen, onClose, pet }) {
  if (!pet) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ChakraModalContent
        width="60rem"
        maxWidth="90%"
        height="30rem"
        borderRadius="0.5rem"
        overflow="hidden"
        position="relative"
        zIndex={10}
      >
        <PetModalWrapper>
          <PetModalHeader>{pet.name}</PetModalHeader>
          <PetCloseButton onClick={onClose}>×</PetCloseButton>
          <PetModalBody>
            <PetImageContainer>
              {pet.photo && <PetImage src={pet.photo} alt={pet.name} />}
            </PetImageContainer>
            <PetDetailsContainer>
              <PetTextBold>Description:</PetTextBold>
              <PetText>{pet.description || 'No description available'}</PetText>
              <PetTextBold>Age:</PetTextBold>
              <PetText>{pet.age} y.o.</PetText>
              <PetTextBold>Size:</PetTextBold>
              <PetText>{Size[pet.size] || pet.size}</PetText>
            </PetDetailsContainer>
          </PetModalBody>
        </PetModalWrapper>
      </ChakraModalContent>
    </Modal>
  );
}
