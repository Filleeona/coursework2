import { FooterColumn, FooterContainer } from './styled.js';
import { Heading, Image, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

export default function Footer() {
  const address = ['Belarus', 'Minsk District', 'Hatovo'];
  const supporters = ['ZooShans.by', 'Egida.by'];

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
        <Link color="white" href="mailto:pets-house@gmail.com">
          pets-house@gmail.com
        </Link>
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
