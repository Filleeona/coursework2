import { Button, Text } from '@chakra-ui/react';
import {
  FindYourPetContainer,
  FindYourPetContent,
  FindYourPetImage,
  FindYourPetWrapper,
} from './styled.js';
import Heading3 from '../../../components/Heading3.jsx';

export default function FindYourPet({ onAdopt }) {
  return (
    <FindYourPetContainer>
      <FindYourPetWrapper>
        <FindYourPetImage bgImage={`url('/maincat3.jpg')`} />
        <FindYourPetContent>
          <Heading3 color="white">Find your pet</Heading3>
          <Text color="white">
            In our shelter there are several pets who wait only for you. They
            wait a lovely family and a cozy home. Please help them to find a new
            family, who will love them!
          </Text>
          <Button borderRadius="20px" colorScheme="teal" onClick={onAdopt}>
            Let&apos;s Adopt
          </Button>
        </FindYourPetContent>
      </FindYourPetWrapper>
    </FindYourPetContainer>
  );
}