import PropTypes from 'prop-types';

import { Media, ListGroup } from 'react-bootstrap';

import './CocktailCard.css';
import { cocktailIngrs } from '../../../utils';

const CocktailCard = (props) => {
  const { cocktail } = props;
  const ingredients = cocktailIngrs(cocktail);

  return (
    <>
      <Media>
        <img
          className="mr-3"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />

        <Media.Body>
          <h3>{cocktail.strDrink}</h3>
          <p>{cocktail.strInstructions}</p>
          <h5>Ingredients: </h5>
          <ListGroup>
            {
              ingredients.map((ingr) => <ListGroup.Item key={ingr}>{ingr}</ListGroup.Item>)
            }
          </ListGroup>
        </Media.Body>
      </Media>
    </>
  );
};

CocktailCard.propTypes = {
  cocktail: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strInstructions: PropTypes.string,
  }).isRequired,
};

export default CocktailCard;
