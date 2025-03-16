import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  BaseContainer,
  BaseTitle,
  LabelContainer,
  CustomSliderThumb,
} from '../styled.js';

export default function AgeRange({ age, setAge }) {
  const { pets } = useSelector((root) => root.app);

  const maxAge = Math.max(...pets.map((pet) => pet.age));
  const minAge = Math.min(...pets.map((pet) => pet.age));

  useEffect(() => {
    setAge([minAge, maxAge]);
  }, []);

  const preparedCurrentValueDisplay =
    age[0] === age[1] ? age[0] : age.join(' - ');

  const onChangeAge = (event) => {
    setAge(event);
  };

  return (
    <BaseContainer>
      <BaseTitle>Age Range</BaseTitle>
      <RangeSlider
        aria-label={['min', 'max']}
        colorScheme="brand"
        defaultValue={[minAge, maxAge]}
        min={minAge}
        max={maxAge}
        onChange={onChangeAge}
      >
        <RangeSliderTrack bg="#e5e7eb">
          <RangeSliderFilledTrack bg="#4a90e2" />
        </RangeSliderTrack>
        <RangeSliderThumb index={0}>
          <CustomSliderThumb />
        </RangeSliderThumb>
        <RangeSliderThumb index={1}>
          <CustomSliderThumb />
        </RangeSliderThumb>
      </RangeSlider>
      <LabelContainer>
        <span>{minAge}</span>
        <span>{preparedCurrentValueDisplay}</span>
        <span>{maxAge}</span>
      </LabelContainer>
    </BaseContainer>
  );
}
