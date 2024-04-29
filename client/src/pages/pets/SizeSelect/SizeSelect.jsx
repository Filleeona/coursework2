import { useSelector } from 'react-redux';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Size } from '../../../constants.js';

export default function SizeSelect({ setSizes }) {
  const { pets } = useSelector((root) => root.app);

  const sizes = ['s', 'm', 'l'];

  useEffect(() => {
    setSizes(sizes);
  }, []);

  const onChange = (event) => {
    setSizes(event);
  };

  if (!pets) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h3 className="h3">Size</h3>
      <div>
        <CheckboxGroup
          defaultValue={sizes}
          onChange={onChange}
          colorScheme="brand"
        >
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            {sizes.map((size) => (
              <Checkbox value={size} key={size}>
                {Size[size]}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </div>
    </div>
  );
}
