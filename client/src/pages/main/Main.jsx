import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Wrapper } from './styled.js';
import { fetchPets } from '../../features/app/appReducer.js';
import { useNavigate } from 'react-router-dom';
import FindYourPet from './FindYourPet/FindYourPet.jsx';
import HelpOptions from './HelpOptions/HelpOptions.jsx';
import WhoIsWaitingForYou from './WhoIsWaitingForYou/WhoIsWaitingForYou.jsx';
import OurStatistic from './OurStatistic/OurStatistic.jsx';

export default function Main() {
  const dispatch = useDispatch();
  const { pets } = useSelector((root) => root.app);

  useEffect(() => {
    if (!pets.length) {
      dispatch(fetchPets());
    }
  }, []);

  const navigate = useNavigate();
  const onAdopt = () => {
    navigate('/pets', { replace: true });
  };

  return (
    <Wrapper>
      <FindYourPet onAdopt={onAdopt} />
      <HelpOptions />
      <WhoIsWaitingForYou onAdopt={onAdopt} />
      <OurStatistic />
    </Wrapper>
  );
}
