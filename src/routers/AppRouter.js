import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './../components/Header';
import DashBoard from './../components/DashBoard';
import Help from './../components/Help';
import NotFound from './../components/NotFound';
import AboutUs from './../components/AboutUs';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashBoard} exact={true} />
        <Route path="/about" component={AboutUs} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
