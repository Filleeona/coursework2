import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { AgeRangeLabelContainer, CustomSliderThumb } from './styled.js';
import { useEffect } from 'react';

export default function AgeRange({ age, setAge }) {
  const { pets } = useSelector((root) => root.app);

  const maxAge = Math.max(...pets.map((pet) => pet.age));
  const minAge = Math.min(...pets.map((pet) => pet.age));

  useEffect(() => {
    setAge([minAge, maxAge]);
  }, []);

  const preparedCurrentValueDisplay =
    age[0] === age[1] ? age[0] : age.join('-');

  const onChangeAge = (event) => {
    setAge(event);
  };

  return (
    <div>
      <h3 className="h3">Age Range</h3>
      <RangeSlider
        aria-label={['min', 'max']}
        colorScheme="pink"
        defaultValue={[minAge, maxAge]}
        min={minAge}
        max={maxAge}
        onChange={onChangeAge}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0}>
          <CustomSliderThumb />
        </RangeSliderThumb>
        <RangeSliderThumb index={1}>
          <CustomSliderThumb />
        </RangeSliderThumb>
      </RangeSlider>
      <AgeRangeLabelContainer>
        <span>{minAge}</span>
        <span>{preparedCurrentValueDisplay}</span>
        <span>{maxAge}</span>
      </AgeRangeLabelContainer>
    </div>
  );
}
