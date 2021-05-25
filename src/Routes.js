import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Category from './pages/Category';
import Cocktail from './pages/Cocktail';
import Home from './pages/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/category/:id" component={Category} />
    <Route path="/cocktail/:id" component={Cocktail} />
  </Switch>
);

export default Routes;
