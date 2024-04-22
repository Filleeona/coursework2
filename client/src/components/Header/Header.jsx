import { useLocation } from 'react-router-dom';
import {
  Box,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { HeaderContainer } from './styled.js';

export default function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Box boxSize="2.5rem">
        <Image src="/logo2.png" />
      </Box>
      <div>
        <Breadcrumb separator="">
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              textDecoration="none"
              color={location.pathname === '/' ? 'teal.500' : 'black.500'}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href="/pets"
              textDecoration="none"
              color={location.pathname === '/pets' ? 'teal.500' : 'black.500'}
            >
              Pets
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href="/help"
              textDecoration="none"
              color={location.pathname === '/help' ? 'teal.500' : 'black.500'}
            >
              Help
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </HeaderContainer>
  );
}
