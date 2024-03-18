import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPets} from "../../features/app/appReducer.js";
import {Skeleton, Spinner} from "@chakra-ui/react";

export default function Main() {
  const dispatch = useDispatch();
  const {pets} = useSelector((root) => root.app);

  useEffect(() => {
    dispatch(fetchPets())
  }, []);

  return <div>
    <div>Main page</div>
    <Spinner/>
    <Skeleton startColor='pink.500' endColor='orange.500' height='20px'/>
  </div>
}