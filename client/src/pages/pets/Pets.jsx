import {
  ColumnsContainer,
  InputsColumn,
  PetsColumn,
  PetsContainer,
  PetsGridContainer,
} from './styled.js';
import { useDispatch, useSelector } from 'react-redux';
import PetItem from './PetItem/PetItem.jsx';
import { useEffect, useMemo } from 'react';
import { fetchPets } from '../../features/app/appReducer.js';
import AdoptBestFriend from './AdoptBestFriend/AdoptBestFriend.jsx';
import AgeRange from './AgeRange/AgeRange.jsx';
import CategorySelect from './CategorySelect/CategorySelect.jsx';
import useFilters from './useFilters.js';
import SizeSelect from './SizeSelect/SizeSelect.jsx';

export default function Pets() {
  const { pets } = useSelector((root) => root.app);
  const dispatch = useDispatch();
  const { age, sizes, categories, setAge, setSizes, setCategories } =
    useFilters();

  useEffect(() => {
    dispatch(fetchPets());
  }, []);

  const preparedPets = useMemo(() => {
    return pets.filter((pet) => {
      console.log(pet.age, age[0], age[1]);
      if (
        age[0] !== undefined &&
        age[1] !== undefined &&
        (pet.age < age[0] || pet.age > age[1])
      ) {
        return false;
      }

      if (!categories.length || !categories.includes(pet.type)) {
        return false;
      }

      if (!sizes.length || !sizes.includes(pet.size)) {
        return false;
      }

      return true;
    });
  }, [pets, age, sizes, categories]);

  if (!pets.length) {
    return <div>Loading</div>;
  }

  return (
    <PetsContainer>
      <AdoptBestFriend />
      <h2 className="h2">Pets</h2>
      <ColumnsContainer>
        <InputsColumn>
          <AgeRange age={age} setAge={setAge} />
          <CategorySelect
            categories={categories}
            setCategories={setCategories}
          />
          <SizeSelect setSizes={setSizes} />
        </InputsColumn>
        <PetsColumn>
          <PetsGridContainer>
            {preparedPets.map((pet) => (
              <PetItem pet={pet} key={pet.name} />
            ))}
          </PetsGridContainer>
        </PetsColumn>
      </ColumnsContainer>
    </PetsContainer>
  );
}
