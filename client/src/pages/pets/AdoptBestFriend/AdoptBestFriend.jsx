import { AdoptBestFriendContainer, AdoptBestFriendsButtons } from './styled.js';
import { Button } from '@chakra-ui/react';

export default function AdoptBestFriend() {
  return (
    <AdoptBestFriendContainer>
      <h1 className="h1">Adopt a best friend</h1>
      <AdoptBestFriendsButtons>
        <Button borderRadius="20px" colorScheme="teal">
          Do it now!
        </Button>
      </AdoptBestFriendsButtons>
    </AdoptBestFriendContainer>
  );
}
