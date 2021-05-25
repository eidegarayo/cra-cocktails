import React from 'react';
import PropTypes from 'prop-types';

import { CocktailList } from '../common';

const Category = (props) => {
  const { catName, cocktails } = props;

  return (
    <>
      <h2>{catName}</h2>
      <CocktailList cocktails={cocktails} />
    </>
  );
};

Category.propTypes = {
  catName: PropTypes.string.isRequired,
  cocktails: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Category;
