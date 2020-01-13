import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import List from '../layout/List';
import Show from './Show';
import Favorites from './Favorites';
import NotFound from '../404';

export const Index: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-container">
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/show/:id" component={Show} />
          <Route path="/favorites" component={Favorites} />
          <Route component={NotFound} />
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
