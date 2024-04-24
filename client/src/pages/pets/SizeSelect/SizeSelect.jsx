import { useSelector } from 'react-redux';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function SizeSelect({ setSizes }) {
  const { pets } = useSelector((root) => root.app);

  if (!pets) {
    return <div>Loading</div>;
  }

  const sizes = Array.from(new Set(pets.map((pet) => pet.size)));

  useEffect(() => {
    setSizes(sizes);
  }, []);

  const onChange = (event) => {
    setSizes(event);
  };

  return (
    <div>
      <h3 className="h3">Category</h3>
      <div>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={sizes}
          onChange={onChange}
        >
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            {sizes.map((size) => (
              <Checkbox value={size} key={size}>
                {size}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </div>
    </div>
  );
}
