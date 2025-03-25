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
import SimilarPetsFilter from '../Filters/SimilarPets/SimilarPetsFilter.jsx';

export default function PetModal({
  isOpen,
  onClose,
  pet,
  onToggleSimilarPets,
  showSimilarPets,
}) {
  if (!pet) return null;

  const handleToggleSimilarPets = () => {
    onToggleSimilarPets();
    onClose();
  };

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
        p={0}
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
              <SimilarPetsFilter
                onToggle={handleToggleSimilarPets}
                isActive={showSimilarPets}
                isDisabled={showSimilarPets}
              />
            </PetDetailsContainer>
          </PetModalBody>
        </PetModalWrapper>
      </ChakraModalContent>
    </Modal>
  );
}
