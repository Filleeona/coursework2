import { Text, Image } from '@chakra-ui/react';
import styled from 'styled-components';

const StatisticItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 0.5rem;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;

const StatisticImage = styled(Image)`
  width: 6rem;
  height: 6rem;
`;

export default function StatisticItem({ amount, text, image }) {
  return (
    <StatisticItemContainer>
      <StatisticImage src={image} />
      <Text as="b" marginTop="1rem" size="l">
        {amount}
      </Text>
      <Text>{text}</Text>
    </StatisticItemContainer>
  );
}
