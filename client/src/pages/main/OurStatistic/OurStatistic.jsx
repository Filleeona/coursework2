import { OurStatisticContainer, OurStatisticContentWrapper } from './styled.js';
import StatisticItem from './StatisticItem/StatisticItem.jsx';

export default function OurStatistic() {
  const statistics = [
    {
      id: 1,
      amount: 57,
      text: 'dogs',
      image: 'TBD',
    },
    {
      id: 2,
      amount: 29,
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
