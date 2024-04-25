import { HelpHeaderContainer, HelpHeaderHeading } from './styled.js';
import { Button } from '@chakra-ui/react';

export default function HelpHeader() {
  return (
    <HelpHeaderContainer>
      <HelpHeaderHeading className="h2">
        Adopt a pet, help us!
      </HelpHeaderHeading>
      <Button borderRadius="20px" colorScheme="teal">
        View pets!
      </Button>
    </HelpHeaderContainer>
  );
}
