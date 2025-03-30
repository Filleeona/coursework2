import { useLocation } from 'react-router-dom';
import {
  Box,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  useColorMode,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, Switch } from '@chakra-ui/icons';
import { HeaderContainer } from './styled.js';
import BreadcrumbItemLink from '../BreadcrumbItem/BreadcrumbItemLink.jsx';
import { useEffect } from 'react';

export default function Header() {
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();

  const isHome = location.pathname === '/';
  const isPets = location.pathname === '/pets';
  const isHelp = location.pathname === '/help';

  useEffect(() => {
    localStorage.setItem('colorMode', colorMode);
  }, [colorMode]);

  return (
    <HeaderContainer>
      <Box boxSize="2.5rem">
        <Image src="images/logo2.png" />
      </Box>
      <Flex align="center" gap="2rem">
        <Breadcrumb separator="" spacing="1rem">
          <BreadcrumbItem>
            <BreadcrumbItemLink
              to="/"
              color={
                isHome
                  ? 'brand.500'
                  : colorMode === 'light'
                    ? 'gray.600'
                    : '#d8d4d3'
              }
            >
              {isHome ? <b>Home</b> : 'Home'}
            </BreadcrumbItemLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbItemLink
              to="/pets"
              color={
                isPets
                  ? 'brand.500'
                  : colorMode === 'light'
                    ? 'gray.600'
                    : '#d8d4d3'
              }
            >
              {isPets ? <b>Pets</b> : 'Pets'}
            </BreadcrumbItemLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbItemLink
              to="/help"
              color={
                isHelp
                  ? 'brand.500'
                  : colorMode === 'light'
                    ? 'gray.600'
                    : '#d8d4d3'
              }
            >
              {isHelp ? <b>Help</b> : 'Help'}
            </BreadcrumbItemLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex align="center" gap="0.5rem">
          {colorMode === 'light' ? (
            <SunIcon color="yellow.500" />
          ) : (
            <MoonIcon color="gray.500" />
          )}
          <Switch
            isChecked={colorMode === 'dark'}
            onChange={toggleColorMode}
            colorScheme="brand"
            size="md"
            aria-label={
              colorMode === 'light'
                ? 'Switch to dark mode'
                : 'Switch to light mode'
            }
            sx={{
              '& .chakra-switch__track': {
                bg: colorMode === 'dark' ? 'gray.600' : 'gray.200',
              },
              '& .chakra-switch__thumb': {
                bg: colorMode === 'dark' ? '#d8d4d3' : '#fff',
              },
            }}
          />
        </Flex>
      </Flex>
    </HeaderContainer>
  );
}
