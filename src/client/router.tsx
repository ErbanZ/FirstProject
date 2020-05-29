import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CurrentYear from './containers/CurrentYear';
import Home from './containers/Home';

// 选择年份
function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/2020" component={CurrentYear} exact />
      <Route path="/2019" component={PastYear} exact />
      {/* <Route path="/2018" component={PastYear} exact /> */}
      {/* <Route path="/2017" component={PastYear} exact /> */}
    </Switch>
  );
}

export default Routes;
