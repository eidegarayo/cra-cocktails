import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CocktailComponent from '../../components/Cocktail';
import { getCocktailByName } from '../../services/cocktailsApi';

const Cocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    if (!id) return;
    async function fetchData() {
      const response = await getCocktailByName(id);
      setCocktail(response);
    }
    fetchData();
  }, [id]);

  return (
    <CocktailComponent cocktail={cocktail} />
  );
};

export default Cocktail;
