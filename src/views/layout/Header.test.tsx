// ETA: 1 Hour
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import Favorites from '../cars/Favorites';

afterEach(cleanup);

describe('<Header />', () => {
  it('should render <Logo />', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    //const logo = getByTestId('logo-brand');
    //expect(logo).toBeDefined();
    const logo = getByAltText('Fake Car');
    expect(logo).toBeDefined();
  });

  it('should render "My Orders" <Link to="/favorites" />', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    );
    //const favLink = document.querySelector('.main-navbar :nth-child(2)');
    //expect(favLink.getAttribute('href')).toEqual('/favorites');
    const favLink = getByText('My Orders');
    expect(favLink.href).toContain('/favorites');
  });
});
