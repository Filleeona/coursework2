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

  const isHome = location.pathname === '/';
  const isPets = location.pathname === '/pets';
  const isHelp = location.pathname === '/help';

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
              color={isHome ? 'brand.500' : 'black.500'}
            >
              {isHome ? <b>Home</b> : 'Home'}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href="/pets"
              textDecoration="none"
              color={location.pathname === '/pets' ? 'brand.500' : 'black.500'}
            >
              {isPets ? <b>Pets</b> : 'Pets'}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href="/help"
              textDecoration="none"
              color={location.pathname === '/help' ? 'brand.500' : 'black.500'}
            >
              {isHelp ? <b>Help</b> : 'Help'}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </HeaderContainer>
  );
}
