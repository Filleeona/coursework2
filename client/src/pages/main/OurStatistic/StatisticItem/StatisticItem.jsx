import { Text, Image } from '@chakra-ui/react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Импортируем Framer Motion

const StatisticItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 0.5rem;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;

// Преобразуем StatisticImage в motion.img
const StatisticImage = styled(motion.img)`
  width: 6rem;
  height: 6rem;
`;

export default function StatisticItem({ amount, text, image }) {
  // Варианты анимации для изображения
  const imageVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 10 },
    },
    hover: {
      scale: 1.1, // Увеличение на 10%
      rotate: 5, // Небольшой поворот
      transition: { type: 'spring', stiffness: 200, damping: 10 }, // Пружинный эффект
    },
  };

  return (
    <StatisticItemContainer>
      <StatisticImage
        src={image}
        alt={text} // Добавим alt для доступности
        variants={imageVariants}
        initial="rest" // Начальное состояние
        whileHover="hover" // Состояние при наведении
      />
      <Text as="b" marginTop="1rem" size="l">
        {amount}
      </Text>
      <Text>{text}</Text>
    </StatisticItemContainer>
  );
}
