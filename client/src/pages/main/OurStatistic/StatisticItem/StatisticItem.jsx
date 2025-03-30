import { Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StatisticItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 0.5rem;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#fff' : '#4b4949'};
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#000' : '#d8d4d3')};
`;

const StatisticImage = styled(motion.img)`
  width: 6rem;
  height: 6rem;
`;

export default function StatisticItem({ amount, text, image }) {
  const imageVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 10 },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: 'spring', stiffness: 200, damping: 10 },
    },
  };

  return (
    <StatisticItemContainer>
      <StatisticImage
        src={image}
        alt={text}
        variants={imageVariants}
        initial="rest"
        whileHover="hover"
      />
      <Text as="b" marginTop="1rem" size="l">
        {amount}
      </Text>
      <Text>{text}</Text>
    </StatisticItemContainer>
  );
}
