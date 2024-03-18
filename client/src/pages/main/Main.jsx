import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPets} from "../../features/app/appReducer.js";

export default function Main() {
  const dispatch = useDispatch();
  const {pets} = useSelector((root) => root.app);

  useEffect(() => {
    dispatch(fetchPets())
  }, []);

  return <div>
    <div>Main page</div>
    <pre>{JSON.stringify(pets)}</pre>
  </div>
}