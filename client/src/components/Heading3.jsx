import { Heading } from '@chakra-ui/react';

export default function Heading3(props) {
  return (
    <Heading size="lg" {...props}>
      {props.children}
    </Heading>
  );
}
