import styled from 'styled-components';

export const AdoptBestFriendContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 27rem;
  background:
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/images/pets_backgrund.jpg') center;
  justify-content: center;
  align-items: center;
  background-size: cover;
`;

export const AdoptBestFriendsButtons = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const AdoptBestFriendTitle = styled.h1`
  color: ${({ theme }) => (theme.colorMode === 'dark' ? '#d8d4d3' : '#fff')};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
`;
