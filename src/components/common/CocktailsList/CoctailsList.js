import React from 'react';
import { Link } from 'react-router-dom';
import { Media, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';


const CoctailsList = (props) => {
  const { cocktails } = props;

  return (
    <div className="cocktails-list mt-5">
      <Row>
        {
          cocktails.map((cocktail) => {
            const { strDrinkThumb, idDrink, strDrink } = cocktail;
            if (cocktail.strDrinkThumb === null) return null;
            return (
              <Col xs="12" sm="6" lg="4" key={idDrink} className="p-4">
                <Link to={`/cocktail/${strDrink}`}>
                  <Media>
                    <img
                      src={strDrinkThumb}
                      alt={strDrink}
                      className="mr-3"
                    />
                    <Media.Body>
                      {strDrink}
                    </Media.Body>
                  </Media>
                </Link>
              </Col>
            );
          })
        }
      </Row>
    </div>
  );
};

CoctailsList.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

CoctailsList.defaultProps = {};

export default CoctailsList;
