import { useState } from 'react';

export default function useFilters() {
  const [age, setAge] = useState([0, 0]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);

  return {
    age,
    setAge,
    categories,
    setCategories,
    sizes,
    setSizes,
  };
}
