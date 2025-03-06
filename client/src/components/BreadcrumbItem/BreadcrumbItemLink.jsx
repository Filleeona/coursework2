import { Link } from 'react-router-dom';
import { useToken } from '@chakra-ui/react';

export default function BreadcrumbItemLink(props) {
  const [color] = useToken('colors', [props.color]);

  return (
    <Link to={props.to} style={{ color }}>
      {props.children}
    </Link>
  );
}
