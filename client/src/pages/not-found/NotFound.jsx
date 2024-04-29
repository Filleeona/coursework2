import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { Wrapper } from './styled.js';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  const onBack = () => {
    navigate('/', { replace: true });
  };

  return (
    <Wrapper>
      <Heading as="h1" size="4xl">
        Oops
      </Heading>
      <div>
        <Text fontSize="xl" align="center">
          We couldn&#39;t find the page you were looking for.
        </Text>
        <Text fontSize="xl" align="center">
          Here&#39;s an adorable kitten instead!
        </Text>
      </div>
      <Button colorScheme="brand" borderRadius="20px" onClick={onBack}>
        Go Back
      </Button>

      <Box boxSize="sm">
        <Image src="/kitten1.jpg" />
      </Box>
    </Wrapper>
  );
}
