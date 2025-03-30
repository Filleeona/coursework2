import { Button, Text, useColorMode } from '@chakra-ui/react';
import {
  FindYourPetContainer,
  FindYourPetContent,
  FindYourPetImage,
  FindYourPetWrapper,
} from './styled.js';

export default function FindYourPet({ onAdopt }) {
  const { colorMode } = useColorMode();

  return (
    <FindYourPetContainer>
      <FindYourPetWrapper>
        <FindYourPetImage bgImage={`url('images/maincat3.jpg')`} />
        <FindYourPetContent>
          <Text
            className="h1"
            color={colorMode === 'dark' ? '#d8d4d3' : '#fff'}
          >
            Find your pet
          </Text>
          <Text>
            In our shelter there are several pets who wait only for you. They
            wait a lovely family and a cozy home. Please help them to find a new
            family, who will love them!
          </Text>
          <Button
            borderRadius="20px"
            mt="1rem"
            bg={colorMode === 'dark' ? '#4b4949' : 'brand.500'}
            color={colorMode === 'dark' ? '#d8d4d3' : '#fff'}
            _hover={
              colorMode === 'dark'
                ? { bg: '#444141', color: '#e5e1e0' }
                : { bg: 'brand.600', color: '#fff' }
            }
            onClick={onAdopt}
          >
            Let&apos;s Adopt
          </Button>
        </FindYourPetContent>
      </FindYourPetWrapper>
    </FindYourPetContainer>
  );
}
