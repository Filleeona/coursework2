import {useLocation} from 'react-router-dom';
import {Wrapper} from "./styled.js";
import {
  Box,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from "@chakra-ui/react";

export default function Header() {
  const location = useLocation();

  return <Wrapper>
    <Box boxSize='3rem'>
      <Image src='/logo2.png'/>
    </Box>
    <div>
      <Breadcrumb separator=''>
        <BreadcrumbItem>
          <BreadcrumbLink href='/' color={location.pathname === '/' ? 'teal.500' : 'black.500'}>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/pets'
                          color={location.pathname === '/pets' ? 'teal.500' : 'black.500'}>Pets</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/help'
                          color={location.pathname === '/help' ? 'teal.500' : 'black.500'}>Help</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  </Wrapper>
}
