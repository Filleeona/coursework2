import { useLocation } from 'react-router-dom';
import { Box, Image, Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { HeaderContainer } from './styled.js';
import BreadcrumbItemLink from '../BreadcrumbItem/BreadcrumbItemLink.jsx';

export default function Header() {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isPets = location.pathname === '/pets';
  const isHelp = location.pathname === '/help';

  return (
    <HeaderContainer>
      <Box boxSize="2.5rem">
        <Image src="images/logo2.png" />
      </Box>
      <div>
        <Breadcrumb separator="" spacing="1rem">
          <BreadcrumbItem>
            <BreadcrumbItemLink
              to="/"
              color={isHome ? 'brand.500' : 'gray.600'}
            >
              {isHome ? <b>Home</b> : 'Home'}
            </BreadcrumbItemLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbItemLink
              to="/pets"
              color={location.pathname === '/pets' ? 'brand.500' : 'gray.600'}
            >
              {isPets ? <b>Pets</b> : 'Pets'}
            </BreadcrumbItemLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbItemLink
              to="/help"
              color={location.pathname === '/help' ? 'brand.500' : 'gray.600'}
            >
              {isHelp ? <b>Help</b> : 'Help'}
            </BreadcrumbItemLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </HeaderContainer>
  );
}
