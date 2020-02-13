import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import ProfilePage from '../components/ProfilePage';
import ContactPage from '../components/ContactPage';
import WorkPage from '../components/WorkPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={ProfilePage} exact={true} />
        <Route path="/work" component={WorkPage} exact={true} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;