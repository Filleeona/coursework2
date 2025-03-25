import { Button } from '@chakra-ui/react';

export default function SimilarPetsFilter({ onToggle, isActive, isDisabled }) {
  return (
    <Button
      onClick={onToggle}
      colorScheme={isActive ? 'brand' : 'gray'}
      size="sm"
      borderRadius="20px"
      mt="1rem"
      isDisabled={isDisabled}
    >
      Show Similar Pets
    </Button>
  );
}
