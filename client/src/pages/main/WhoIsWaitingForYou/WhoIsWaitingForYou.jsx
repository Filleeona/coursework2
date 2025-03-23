import { Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react'; // useEffect не нужен, убираем
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

  // Варианты анимации для имени
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Компонент для элемента с анимацией по видимости
  const GridItemWithAnimation = ({ pet, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '0px 0px -100px 0px' });

    return (
      <WhoIsWaitingGridItem ref={ref} backgroundImage={pet.photo} key={index}>
        <motion.span
          variants={nameVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'} // Анимация зависит от видимости
        >
          {pet.name}
        </motion.span>
      </WhoIsWaitingGridItem>
    );
  };

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
          <GridItemWithAnimation pet={pet} index={index} />
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
