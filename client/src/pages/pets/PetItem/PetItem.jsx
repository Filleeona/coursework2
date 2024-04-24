import { PetImage, PetItemContainer, PetItemHeading } from './styled.js';

export default function PetItem({ pet }) {
  return (
    <PetItemContainer>
      <PetImage src={pet.photo} alt={pet.name} />
      <PetItemHeading className="h4">{pet.name}</PetItemHeading>
      <span>{pet.description}</span>
    </PetItemContainer>
  );
}
