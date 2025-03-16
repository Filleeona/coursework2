import { CheckboxGroup, Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Size } from '../../../../constants.js';
import { BaseContainer, BaseTitle, CustomCheckbox } from '../styled.js';

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
    <BaseContainer>
      {' '}
      <BaseTitle>Size</BaseTitle>
      <CheckboxGroup defaultValue={sizes} onChange={onChange}>
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
          {sizes.map((size) => (
            <CustomCheckbox value={size} key={size}>
              {Size[size]}
            </CustomCheckbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </BaseContainer>
  );
}
