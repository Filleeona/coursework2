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
import { useEffect, useMemo, useRef, useState } from 'react';
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
  const [showSimilarPets, setShowSimilarPets] = useState(false);
  const [similarPet, setSimilarPet] = useState(null);
  const filterButtonRef = useRef(null);

  useEffect(() => {
    if (!pets.length) {
      dispatch(fetchPets());
    }
  }, [dispatch, pets.length]);

  const preparedPets = useMemo(() => {
    return pets.filter((pet) => {
      if (showSimilarPets && similarPet) {
        const ageDifference = Math.abs(
          Number(pet.age) - Number(similarPet.age),
        );
        const isSameSize = pet.size === similarPet.size;
        const isWithinAgeRange = ageDifference <= 1.5;
        const isSameType = pet.type === similarPet.type;

        return isSameSize && isWithinAgeRange && isSameType;
      }

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
  }, [pets, age, sizes, categories, showSimilarPets, similarPet]);

  const openPetModal = (pet) => {
    setSelectedPet(pet);
  };

  const closePetModal = () => {
    setSelectedPet(null);
  };

  const toggleSimilarPets = () => {
    if (filterButtonRef.current) {
      filterButtonRef.current.focus();
    }
    setShowSimilarPets((prev) => {
      const newValue = !prev;
      if (newValue) {
        setSimilarPet(selectedPet);
      } else {
        setSimilarPet(null);
      }
      return newValue;
    });
  };

  const clearSimilarPetsFilter = () => {
    setShowSimilarPets(false);
    setSimilarPet(null);
  };

  if (!pets.length) {
    return <div>Loading...</div>;
  }

  return (
    <PetsContainer>
      <AdoptBestFriend />
      <ColumnsContainer>
        <Box mb="15px" display="flex" gap="10px">
          <Button
            ref={filterButtonRef}
            onClick={() => setShowFilters(!showFilters)}
            colorScheme="brand"
            size="md"
            borderRadius="20px"
            width="8rem"
          >
            {showFilters ? 'Hide Filters' : 'Filter Pets'}
          </Button>
          {showSimilarPets && (
            <Button
              onClick={clearSimilarPetsFilter}
              colorScheme="brand"
              size="md"
              borderRadius="20px"
              width="12rem"
            >
              Clear Similar Pets
            </Button>
          )}
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
                  onClick={() => openPetModal(pet)}
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
        onToggleSimilarPets={toggleSimilarPets}
        showSimilarPets={showSimilarPets}
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
