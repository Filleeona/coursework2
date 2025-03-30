import { HelpHeaderContainer, HelpHeaderHeading } from './styled.js';
import { Button, useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function HelpHeader() {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  return (
    <HelpHeaderContainer>
      <HelpHeaderHeading className="h2">
        Adopt a pet, help us!
      </HelpHeaderHeading>
      <Button
        borderRadius="20px"
        bg={colorMode === 'dark' ? '#4b4949' : 'brand.500'}
        color={colorMode === 'dark' ? '#d8d4d3' : '#fff'}
        _hover={
          colorMode === 'dark'
            ? { bg: '#444141', color: '#e5e1e0' }
            : { bg: 'brand.600', color: '#fff' }
        }
        onClick={() => navigate('/pets', { replace: true })}
      >
        View pets!
      </Button>
    </HelpHeaderContainer>
  );
}
