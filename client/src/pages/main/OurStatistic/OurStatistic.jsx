import { OurStatisticContainer, OurStatisticContentWrapper } from './styled.js';
import StatisticItem from './StatisticItem/StatisticItem.jsx';
import { useSelector } from 'react-redux';

export default function OurStatistic() {
  const { pets } = useSelector((root) => root.app);

  const amountOfCats = pets.filter((pet) => pet.type === 'cat').length;
  const amountOfDogs = pets.filter((pet) => pet.type === 'dog').length;

  const statistics = [
    {
      id: 1,
      amount: amountOfDogs,
      text: 'dogs',
      image: 'TBD',
    },
    {
      id: 2,
      amount: amountOfCats,
      text: 'cats',
      image: 'TBD',
    },
    {
      id: 4,
      amount: 231,
      text: 'adopted',
      image: 'TBD',
    },
  ];

  return (
    <OurStatisticContainer>
      <h3 className="h3">Our statistic</h3>
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
