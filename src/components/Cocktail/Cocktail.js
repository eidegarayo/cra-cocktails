import PropTypes from 'prop-types';

import './Cocktail.css';
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
