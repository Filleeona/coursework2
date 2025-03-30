import {
  AdoptBestFriendContainer,
  AdoptBestFriendsButtons,
  AdoptBestFriendTitle,
} from './styled.js';
import { Button, useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function AdoptBestFriend() {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  return (
    <AdoptBestFriendContainer>
      <AdoptBestFriendTitle className="h1">
        Adopt a best friend
      </AdoptBestFriendTitle>
      <AdoptBestFriendsButtons>
        <Button
          borderRadius="20px"
          mt="15px"
          bg={colorMode === 'dark' ? '#4b4949' : 'brand.500'}
          color={colorMode === 'dark' ? '#d8d4d3' : '#fff'}
          _hover={
            colorMode === 'dark'
              ? { bg: '#444141', color: '#e5e1e0' }
              : { bg: 'brand.600', color: '#fff' }
          }
          onClick={() => navigate('/help', { replace: true })}
        >
          Do it now!
        </Button>
      </AdoptBestFriendsButtons>
    </AdoptBestFriendContainer>
  );
}
