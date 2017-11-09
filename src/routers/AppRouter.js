import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './../components/Header';
import DashBoard from './../components/DashBoard';
import Help from './../components/Help';
import NotFound from './../components/NotFound';
import AboutUs from './../components/AboutUs';
import Footer from './../components/Footer';
import Contact from './../components/Contact';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashBoard} exact={true} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
