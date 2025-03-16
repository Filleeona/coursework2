import { CheckboxGroup, Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Category } from '../../../../constants.js';
import { BaseContainer, BaseTitle, CustomCheckbox } from '../styled.js';

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
    <BaseContainer>
      {' '}
      <BaseTitle>Category</BaseTitle>
      <CheckboxGroup defaultValue={categories} onChange={onChange}>
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
          {categories.map((category) => (
            <CustomCheckbox value={category} key={category}>
              {Category[category]}
            </CustomCheckbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </BaseContainer>
  );
}
