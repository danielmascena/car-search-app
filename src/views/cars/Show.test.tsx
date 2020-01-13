import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { render, cleanup, wait } from '@testing-library/react';

afterEach(cleanup);

describe('<Show />', () => {
  it('should redirect to 404 if car is not found', () => {
    const { findByText } = render(() => (
      <BrowserRouter>
        <Redirect to="/show/hehrerer" />
      </BrowserRouter>
    ));
    const notFound = findByText('404 - Not Found');
    expect(notFound).toBeDefined();
  });

  it('should render car manufacturer name', () => {
    const { findByText } = render(() => (
      <BrowserRouter>
        <Redirect to="/show/0" />
      </BrowserRouter>
    ));
    const car = wait(() => findByText(''));
    expect(car).not.toBeNull();
  });

  it('should render car model name', () => {
    const { getByTestId } = render(() => (
      <BrowserRouter>
        <Redirect to="/show/1" />
      </BrowserRouter>
    ));
    const car = wait(() => getByTestId('car_headingccc'));
    expect(car).not.toBe({});
  });

  it('should render car stock number', () => {
    const { getByText } = render(() => (
      <BrowserRouter>
        <Redirect to="/show/0" />
      </BrowserRouter>
    ));
    const car = wait(() => getByText('#1'));
    expect(car).toBeTruthy();
  });

  it('should render car mileage', () => {});

  it('should render car fule type', () => {});

  it('should render car color', () => {});

  it('should render "Save" favorites <Button />', () => {});
});
