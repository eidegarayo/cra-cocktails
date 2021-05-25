import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'react-bootstrap';

import './Layout.css';

const Layout = (props) => {
  const { children } = props;

  return (
    <main>
      <Container>
        {children}
      </Container>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
