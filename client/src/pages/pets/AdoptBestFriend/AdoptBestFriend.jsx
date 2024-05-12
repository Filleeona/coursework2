import { AdoptBestFriendContainer, AdoptBestFriendsButtons } from './styled.js';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function AdoptBestFriend() {
  const navigate = useNavigate();

  return (
    <AdoptBestFriendContainer>
      <h1 className="h1">Adopt a best friend</h1>
      <AdoptBestFriendsButtons>
        <Button
          borderRadius="20px"
          colorScheme="brand"
          onClick={() => navigate('/help', { replace: true })}
        >
          Do it now!
        </Button>
      </AdoptBestFriendsButtons>
    </AdoptBestFriendContainer>
  );
}
