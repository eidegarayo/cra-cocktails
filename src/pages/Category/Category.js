import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CategoryComponent from '../../components/Category';
import { getCocktailsByCat } from '../../services/cocktailsApi';

const Category = () => {
  const { id } = useParams();
  const catName = id.replace(/_/g, ' ').replace(/-/g, '/');
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    if (!catName) return;
    async function fetchData() {
      const response = await getCocktailsByCat(catName);
      setCocktails(response);
    }
    fetchData();
  }, [catName]);

  return (
    <CategoryComponent catName={catName} cocktails={cocktails} />
  );
};

export default Category;
