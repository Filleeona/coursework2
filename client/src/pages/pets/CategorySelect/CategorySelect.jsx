import { useSelector } from 'react-redux';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function CategorySelect({ setCategories }) {
  const { pets } = useSelector((root) => root.app);

  if (!pets) {
    return <div>Loading</div>;
  }

  const categories = Array.from(new Set(pets.map((pet) => pet.type)));

  useEffect(() => {
    setCategories(categories);
  }, []);

  const onChange = (event) => {
    setCategories(event);
  };

  return (
    <div>
      <h3 className="h3">Category</h3>
      <div>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={categories}
          onChange={onChange}
        >
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            {categories.map((size) => (
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