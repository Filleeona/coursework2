import { Text, Image } from '@chakra-ui/react';
import styled from 'styled-components';

const StatisticItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem 0.5rem 1rem;
  border: 1px solid black;
`;

const StatisticImage = styled(Image)`
  width: 6rem;
  height: 6rem;
`;

export default function StatisticItem({ amount, text, image }) {
  return (
    <StatisticItemContainer>
      <StatisticImage />
      <Text as="b" marginTop="1rem" size="l">
        {amount}
      </Text>
      <Text>{text}</Text>
    </StatisticItemContainer>
  );
}
