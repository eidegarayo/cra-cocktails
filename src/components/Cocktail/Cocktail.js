import PropTypes from 'prop-types';

import { CocktailCard } from '../common';

const Cocktail = (props) => {
  const { cocktail } = props;

  return (
    <>
      <CocktailCard cocktail={cocktail} />
    </>
  );
};

Cocktail.propTypes = {
  cocktail: PropTypes.shape({}).isRequired,
};

export default Cocktail;
