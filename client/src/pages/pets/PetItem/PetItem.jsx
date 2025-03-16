import {
  PetItemContainer,
  PetImage,
  PetItemHeading,
  PetDescription,
  PetDetails,
} from './styled.js';
import { Size } from '../../../constants.js';

export default function PetItem({ pet }) {
  return (
    <PetItemContainer>
      <PetImage src={pet.photo} alt={pet.name} />
      <PetItemHeading>{pet.name}</PetItemHeading>
      <PetDescription>{pet.description}</PetDescription>
      <PetDetails>
        {pet.size && <span>{Size[pet.size]}</span>}
        {pet.age && <span>{pet.age} y.o.</span>}
      </PetDetails>
    </PetItemContainer>
  );
}
