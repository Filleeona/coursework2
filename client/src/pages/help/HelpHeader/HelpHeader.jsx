import { HelpHeaderContainer, HelpHeaderHeading } from './styled.js';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function HelpHeader() {
  const navigate = useNavigate();

  return (
    <HelpHeaderContainer>
      <HelpHeaderHeading className="h2">
        Adopt a pet, help us!
      </HelpHeaderHeading>
      <Button
        borderRadius="20px"
        colorScheme="brand"
        onClick={() => navigate('/pets', { replace: true })}
      >
        View pets!
      </Button>
    </HelpHeaderContainer>
  );
}
