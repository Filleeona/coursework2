import {
  ColumnsContainer,
  InputsColumn,
  PetsColumn,
  PetsColumnHeading,
  PetsContainer,
  PetsGridContainer,
  PetsVideoContainer,
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
    if (!pets.length) {
      dispatch(fetchPets());
    }
  }, []);

  const preparedPets = useMemo(() => {
    return pets.filter((pet) => {
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
          <PetsColumnHeading className="h2">
            Here are our cuties
          </PetsColumnHeading>

          {preparedPets.length === 0 ? (
            <div>No pets according to these params!</div>
          ) : (
            <PetsGridContainer>
              {preparedPets.map((pet) => (
                <PetItem pet={pet} key={pet.name} />
              ))}
            </PetsGridContainer>
          )}
        </PetsColumn>
      </ColumnsContainer>
      <PetsVideoContainer>
        <iframe
          src="https://www.youtube-nocookie.com/embed/y0sF5xhGreA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="online-cams__video_main"
        />
      </PetsVideoContainer>
    </PetsContainer>
  );
}
