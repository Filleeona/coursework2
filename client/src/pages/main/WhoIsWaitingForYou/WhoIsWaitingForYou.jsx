import { Button, Text, useColorMode } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
  const { colorMode } = useColorMode();

  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const GridItemWithAnimation = ({ pet, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '0px 0px -100px 0px' });

    return (
      <WhoIsWaitingGridItem ref={ref} backgroundImage={pet.photo} key={index}>
        <motion.span
          variants={nameVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {pet.name}
        </motion.span>
      </WhoIsWaitingGridItem>
    );
  };

  return (
    <WhoIsWaitingForYouContainer>
      <WhoIsWaitingHeadingContainer>
        <Text className="h2" color={colorMode === 'dark' ? '#d8d4d3' : '#000'}>
          Who is waiting for you?
        </Text>
      </WhoIsWaitingHeadingContainer>
      <WhoIsWaitingGridContainer>
        {preparedPets.map((pet) => (
          <GridItemWithAnimation pet={pet} index={pet.id} key={pet.id} />
        ))}
      </WhoIsWaitingGridContainer>
      <Button
        marginTop="2rem"
        borderRadius="20px"
        padding="1rem 5rem"
        onClick={onAdopt}
        bg={colorMode === 'dark' ? '#4b4949' : 'brand.500'}
        color={colorMode === 'dark' ? '#d8d4d3' : '#fff'}
        _hover={
          colorMode === 'dark'
            ? { bg: '#444141', color: '#e5e1e0' }
            : { bg: 'brand.600', color: '#fff' }
        }
      >
        More
      </Button>
    </WhoIsWaitingForYouContainer>
  );
}
