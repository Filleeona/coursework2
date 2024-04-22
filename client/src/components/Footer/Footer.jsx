import { FooterColumn, FooterContainer } from './styled.js';
import { Heading, Image, Text } from '@chakra-ui/react';

export default function Footer() {
  const address = ['Belarus', 'Minsk', 'Test1', 'Test2'];
  const supporters = [
    'lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet2',
    'amet',
    'sit5',
    'ipsum3',
  ];

  return (
    <FooterContainer>
      <FooterColumn>
        <Image src="/logo2.png" height="8rem" />
      </FooterColumn>
      <FooterColumn>
        <Heading fontSize="l" color="white" marginBottom="1rem">
          Address
        </Heading>
        {address.map((item) => (
          <Text color="white" key={item} fontSize="sm">
            {item}
          </Text>
        ))}
      </FooterColumn>
      <FooterColumn>
        <Heading fontSize="l" color="white" marginBottom="1rem">
          Contact
        </Heading>
        <Text color="white" fontSize="sm">
          Write here more
        </Text>
      </FooterColumn>
      <FooterColumn>
        <Heading fontSize="l" color="white" marginBottom="1rem">
          Supporters
        </Heading>
        {supporters.map((item) => (
          <Text color="white" key={item} fontSize="sm">
            {item}
          </Text>
        ))}
      </FooterColumn>
    </FooterContainer>
  );
}
