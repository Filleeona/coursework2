import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {NvBox, PetBox, Wrapper} from "./styled.js";
import {fetchPets} from "../../features/app/appReducer.js";
import {Box, Button, Grid, Image, Text} from "@chakra-ui/react";
import {useNavigate, Link} from "react-router-dom";

export default function Main() {
  const dispatch = useDispatch();
  const {pets} = useSelector((root) => root.app);

  useEffect(() => {
    dispatch(fetchPets())
  }, []);

  const navigate = useNavigate();
  const onAdopt = () => {
    navigate('/pets', {replace: true})
  }

  return <Wrapper>
    <Box width="100%" height="25rem">
      <Box display="flex"
           justifyContent="center"
           alignItems="center"
           bgImage={`url('/maincat3.jpg')`}
           bgSize="cover"
           bgPosition="center"
           width="100%"
           height="100%">
        <Box width="80%">
          <Box width="30%"
               display="flex"
               justifyContent="center"
               alignItems="start"
               flexDir="column"
               gap="0.5rem">
            <Text fontSize='3xl' as='b' color="white">Find your pet</Text>
            <Box>
              <Text color="white">In our shelter there are several pets who wait only for you. They
                wait a lovely family and a cozy home. Please help them to find a new family, who will love them!
              </Text>
            </Box>
            <Button borderRadius="20px" colorScheme="teal" onClick={onAdopt}>Let&apos;s Adopt</Button>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box width="100%" height="14rem" display="flex" alignItems="center" justifyContent="center" gap="8rem">
      <NvBox as={Link} to="/pets">
        <Image src='/heart3.png' boxSize="6rem"></Image>
        <Text textDecoration="none">Adopt a pet</Text>
      </NvBox>
      <NvBox as={Link} to="/help">
        <Image src='/man2.png' boxSize="6rem"></Image>
        <Text textDecoration="none">Be a volunteer</Text>
      </NvBox>
      <NvBox as={Link} to="/help">
        <Image src='/hand3.png' boxSize="6rem"></Image>
        <Text textDecoration="none">Donate for them</Text>
      </NvBox>
    </Box>
    <Box width="100%" height="40rem" display="flex" alignItems="center" justifyContent="center" flexDir="column"
         gap="2rem">
      <Box display="flex" alignItems="center" justifyContent="center" flexDir="column" gap="0">
        <Text fontSize='3xl'>Who are waiting for you?</Text>
        <Text>If you want to know more about a pet, just click on its box.</Text>
      </Box>
      <Box width="80%" height="80%" border="1px solid black" display="flex" alignItems="center" justifyContent="center">
        <Grid templateColumns="repeat(3, 1fr)" width="80%" height="100%">
          {pets.slice(0, 6).map((pet, index) => (
            <PetBox key={index}>
              {pet.name}
            </PetBox>
          ))}
        </Grid>
      </Box>
      <Button borderRadius="20px" width="7rem" colorScheme="teal" onClick={onAdopt}>More</Button>
    </Box>
  </Wrapper>
}