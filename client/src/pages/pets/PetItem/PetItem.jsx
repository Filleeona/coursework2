import { PetImage, PetItemContainer, PetItemHeading } from './styled.js';
import { Size } from '../../../constants.js';

export default function PetItem({ pet }) {
  return (
    <PetItemContainer>
      <PetImage src={pet.photo} alt={pet.name} />
      <PetItemHeading className="h4">{pet.name}</PetItemHeading>
      <span>{pet.description}</span>
      <span>
        {Size[pet.size]}, {pet.age} y.o.
      </span>
    </PetItemContainer>
  );
}
