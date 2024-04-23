import { Button, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {
  WhoIsWaitingForYouContainer,
  WhoIsWaitingGridContainer,
  WhoIsWaitingGridItem,
  WhoIsWaitingHeadingContainer,
} from './styled.js';
import Heading3 from '../../../components/Heading3.jsx';

export default function WhoIsWaitingForYou({ onAdopt }) {
  const { pets } = useSelector((root) => root.app);
  const clonedPets = structuredClone(pets);
  clonedPets.sort(() => Math.random() - 0.5);
  const preparedPets = clonedPets.slice(0, 6);

  return (
    <WhoIsWaitingForYouContainer>
      <WhoIsWaitingHeadingContainer>
        <Heading3>Who is waiting for you?</Heading3>
        <Text>
          If you want to know more about a pet, just click on its box.
        </Text>
      </WhoIsWaitingHeadingContainer>
      <WhoIsWaitingGridContainer>
        {preparedPets.map((pet, index) => (
          <WhoIsWaitingGridItem backgroundImage={pet.photo} key={index}>
            {pet.name}
          </WhoIsWaitingGridItem>
        ))}
      </WhoIsWaitingGridContainer>
      <Button
        marginTop="2rem"
        borderRadius="20px"
        padding="1rem 2rem"
        colorScheme="teal"
        onClick={onAdopt}
      >
        More
      </Button>
    </WhoIsWaitingForYouContainer>
  );
}
