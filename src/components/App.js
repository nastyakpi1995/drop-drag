import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';

import { requestForProducts } from '../redux/ducks/products';
import PhoneCatalog from './catalog/PhoneCatalog';
import WishesList from './wishesList/WishesList';

import './App.css';

const App = ({ requestProducts }) => {
  useEffect(() => {
    requestProducts();
  });

  return (
    <div className="App">

      <NavLink
        to="/catalog"
        className="Catalog__page"
      >
        Catalog
      </NavLink>
      <NavLink
        to="/wishes"
        className="wishes__page"
      >
        List Wishes
      </NavLink>
      <Route
        path="/catalog"
        exact
        component={PhoneCatalog}
      />
      <Route
        path="/wishes"
        exact
        component={WishesList}
      />

    </div>
  );
};

App.propTypes = {
  requestProducts: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch(requestForProducts()),
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
