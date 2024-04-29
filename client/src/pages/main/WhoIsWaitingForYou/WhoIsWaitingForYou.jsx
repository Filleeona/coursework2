import { Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {
  WhoIsWaitingForYouContainer,
  WhoIsWaitingGridContainer,
  WhoIsWaitingGridItem,
  WhoIsWaitingHeadingContainer,
} from './styled.js';

export default function WhoIsWaitingForYou({ onAdopt }) {
  const { pets } = useSelector((root) => root.app);
  const clonedPets = structuredClone(pets);
  clonedPets.sort(() => Math.random() - 0.5);
  const preparedPets = clonedPets.slice(0, 6);

  return (
    <WhoIsWaitingForYouContainer>
      <WhoIsWaitingHeadingContainer>
        <h2 className="h2">Who is waiting for you?</h2>
        <h3 className="h3">
          If you want to know more about a pet, just click on its box.
        </h3>
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
        padding="1rem 5rem"
        onClick={onAdopt}
        colorScheme="brand"
      >
        More
      </Button>
    </WhoIsWaitingForYouContainer>
  );
}
