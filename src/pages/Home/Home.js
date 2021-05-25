import { useState, useEffect } from 'react';

import { CocktailCard } from '../../components/common';
import { getRandomCocktail } from '../../services/cocktailsApi';

const Home = () => {
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getRandomCocktail();
      setCocktail(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>Today&apos;s cocktail</h2>
      <CocktailCard cocktail={cocktail} />
    </>
  );
};

export default Home;
