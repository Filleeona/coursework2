import { Link } from 'react-router-dom';
import { Image, Text } from '@chakra-ui/react';
import { HelpOption, HelpOptionsContainer } from './styled.js';

export default function HelpOptions() {
  return (
    <HelpOptionsContainer>
      <HelpOption as={Link} to="/pets">
        <Image src="images/heart3.png" boxSize="6rem" />
        <Text textDecoration="none">Adopt a pet</Text>
      </HelpOption>
      <HelpOption as={Link} to="/help">
        <Image src="images/man2.png" boxSize="6rem" />
        <Text textDecoration="none">Be a volunteer</Text>
      </HelpOption>
      <HelpOption as={Link} to="/help">
        <Image src="images/hand3.png" boxSize="6rem" />
        <Text textDecoration="none">Donate for pets</Text>
      </HelpOption>
    </HelpOptionsContainer>
  );
}
