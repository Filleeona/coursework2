import { PetImage, PetItemContainer } from './styled.js';

export default function PetItem({ pet }) {
  return (
    <PetItemContainer>
      <PetImage src={pet.photo} alt={pet.name} />
      <h4 className="h4" style={{ textAlign: 'left', marginTop: '0.6rem' }}>
        {pet.name}
      </h4>
      <span>{pet.description}</span>
    </PetItemContainer>
  );
}
