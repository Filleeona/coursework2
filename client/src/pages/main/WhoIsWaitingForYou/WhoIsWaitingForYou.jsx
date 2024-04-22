import { Button, Heading, Text } from '@chakra-ui/react';
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
  const preparedPets = pets.slice(0, 6);

  return (
    <WhoIsWaitingForYouContainer>
      <WhoIsWaitingHeadingContainer>
        <Heading3>Who are waiting for you?</Heading3>
        <Text>
          If you want to know more about a pet, just click on its box.
        </Text>
      </WhoIsWaitingHeadingContainer>
      <WhoIsWaitingGridContainer>
        {preparedPets.map((pet, index) => (
          <WhoIsWaitingGridItem key={index}>{pet.name}</WhoIsWaitingGridItem>
        ))}
      </WhoIsWaitingGridContainer>
      <Button
        marginTop="2rem"
        borderRadius="20px"
        width="7rem"
        colorScheme="teal"
        onClick={onAdopt}
      >
        More
      </Button>
    </WhoIsWaitingForYouContainer>
  );
}
