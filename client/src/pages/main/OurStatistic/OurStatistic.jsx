import { OurStatisticContainer, OurStatisticContentWrapper } from './styled.js';
import StatisticItem from './StatisticItem/StatisticItem.jsx';
import { useSelector } from 'react-redux';
import { Text, useColorMode } from '@chakra-ui/react';

export default function OurStatistic() {
  const { pets } = useSelector((root) => root.app);
  const { colorMode } = useColorMode();

  const amountOfCats = pets.filter((pet) => pet.type === 'cat').length;
  const amountOfDogs = pets.filter((pet) => pet.type === 'dog').length;

  const statistics = [
    {
      id: 1,
      amount: amountOfDogs,
      text: 'dogs',
      image: '/svg/dog.svg',
    },
    {
      id: 2,
      amount: amountOfCats,
      text: 'cats',
      image: '/svg/cat.svg',
    },
    {
      id: 3,
      amount: 231,
      text: 'adopted',
      image: '/svg/pet-shelter.svg',
    },
  ];

  return (
    <OurStatisticContainer>
      <Text className="h3" color={colorMode === 'dark' ? '#d8d4d3' : '#000'}>
        Our statistic
      </Text>
      <OurStatisticContentWrapper>
        {statistics.map((item) => (
          <StatisticItem
            amount={item.amount}
            text={item.text}
            image={item.image}
            key={item.id}
          />
        ))}
      </OurStatisticContentWrapper>
    </OurStatisticContainer>
  );
}
