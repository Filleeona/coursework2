import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Wrapper} from "./styled.js";
import {fetchPets} from "../../features/app/appReducer.js";
import {Box, Button, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

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
          <Button colorScheme="teal" onClick={onAdopt}>Let&apos;s Adopt</Button>
        </Box>
      </Box>
    </Box>
    <Box></Box>
  </Wrapper>
}