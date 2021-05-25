import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Navbar, Nav } from 'react-bootstrap';

import './Header.css';

const Header = (props) => {
  const { categories } = props;

  return (
    <header>
      <Navbar expand="lg">
        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
          <div>
            <span>&#127864;</span>
            <span>&#127864;</span>
            <span>&#127864;</span>
          </div>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {
              categories.map((cat) => {
                const catName = cat.strCategory;
                const formatedCat = catName.replace(/ /g, '_').replace(/\//g, '-');

                return <Link key={formatedCat} className="nav-link" to={`/category/${formatedCat}`}>{catName}</Link>;
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    strCategory: PropTypes.string,
  })).isRequired,
};

Header.defaultProps = {};

export default Header;
