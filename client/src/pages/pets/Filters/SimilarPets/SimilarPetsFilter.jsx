import { Button, useColorMode } from '@chakra-ui/react';

export default function SimilarPetsFilter({ onToggle, isDisabled }) {
  const { colorMode } = useColorMode();

  return (
    <Button
      onClick={onToggle}
      size="sm"
      borderRadius="20px"
      mt="1rem"
      width="10rem"
      bg={colorMode === 'dark' ? '#4b4949' : 'brand.500'}
      color={colorMode === 'dark' ? '#d8d4d3' : '#fff'}
      _hover={
        colorMode === 'dark'
          ? { bg: '#444141', color: '#e5e1e0' }
          : { bg: 'brand.600', color: '#fff' }
      }
      isDisabled={isDisabled}
    >
      Show Similar Pets
    </Button>
  );
}
