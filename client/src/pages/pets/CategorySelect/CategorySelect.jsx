import { useSelector } from 'react-redux';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Category } from '../../../constants.js';

export default function CategorySelect({ setCategories }) {
  const { pets } = useSelector((root) => root.app);

  const categories = ['cat', 'dog'];

  useEffect(() => {
    setCategories(categories);
  }, []);

  const onChange = (event) => {
    setCategories(event);
  };

  if (!pets) {
    return <div>Loading</div>;
  }

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
            {categories.map((category) => (
              <Checkbox value={category} key={category} colorScheme="brand">
                {Category[category]}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </div>
    </div>
  );
}
