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
import PetModal from './PetModal/PetModal.jsx';
import { useEffect, useMemo, useState } from 'react';
import { fetchPets } from '../../features/app/appReducer.js';
import AdoptBestFriend from './AdoptBestFriend/AdoptBestFriend.jsx';
import AgeRange from './Filters/AgeRange/AgeRange.jsx';
import CategorySelect from './Filters/CategorySelect/CategorySelect.jsx';
import useFilters from './useFilters.js';
import SizeSelect from './Filters/SizeSelect/SizeSelect.jsx';
import { Box, Button, Collapse } from '@chakra-ui/react';

export default function Pets() {
  const { pets } = useSelector((root) => root.app);
  const dispatch = useDispatch();
  const { age, sizes, categories, setAge, setSizes, setCategories } =
    useFilters();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    if (!pets.length) {
      dispatch(fetchPets());
    }
  }, [dispatch, pets.length]);

  const preparedPets = useMemo(() => {
    return pets.filter((pet) => {
      if (
        age[0] !== undefined &&
        age[1] !== undefined &&
        (pet.age < age[0] || pet.age > age[1])
      ) {
        return false;
      }
      if (categories.length > 0 && !categories.includes(pet.type)) {
        return false;
      }
      return !(sizes.length > 0 && !sizes.includes(pet.size));
    });
  }, [pets, age, sizes, categories]);

  const openPetModal = (pet) => {
    console.log('Opening modal for:', pet);
    setSelectedPet(pet);
  };

  const closePetModal = () => {
    setSelectedPet(null);
  };

  if (!pets.length) {
    return <div>Loading...</div>;
  }

  return (
    <PetsContainer>
      <AdoptBestFriend />
      <ColumnsContainer>
        <Box mb="15px">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            colorScheme="brand"
            size="md"
            borderRadius="20px"
            width="8rem"
          >
            {showFilters ? 'Hide Filters' : 'Filter Pets'}
          </Button>
        </Box>

        <Collapse in={showFilters} animateOpacity>
          <InputsColumn>
            <AgeRange age={age} setAge={setAge} />
            <CategorySelect
              categories={categories}
              setCategories={setCategories}
            />
            <SizeSelect setSizes={setSizes} />
          </InputsColumn>
        </Collapse>

        <PetsColumn>
          <PetsColumnHeading className="h2">
            Here are our pets
          </PetsColumnHeading>
          {preparedPets.length === 0 ? (
            <div>No pets according to these params!</div>
          ) : (
            <PetsGridContainer>
              {preparedPets.map((pet) => (
                <PetItem
                  pet={pet}
                  key={pet.name}
                  onClick={() => openPetModal(pet)} // Pass click handler
                />
              ))}
            </PetsGridContainer>
          )}
        </PetsColumn>
      </ColumnsContainer>

      <PetModal
        isOpen={!!selectedPet}
        onClose={closePetModal}
        pet={selectedPet}
      />

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
