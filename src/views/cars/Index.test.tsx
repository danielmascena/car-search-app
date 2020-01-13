// ETA: 2-3 hours
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Index } from './Index';
import { store } from '../../index';
import { Provider } from 'react-redux';
import Header from '../layout/Header';

afterEach(cleanup);

describe('<Index />', () => {
  it('should not render Welcome!', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Index />
      </Provider>
    );
    const welcome = getByText('Welcome!');
    expect(welcome).toBe(undefined);
  });

  it('should render <Header />', () => {
    render(<Header />);
  });

  it('should render <Footer /> at the bottom', () => {
    expect(false).toBe(true);
  });

  it('should render <NavFilter />', () => {
    expect(false).toBe(true);
  });

  it('should render sort <Select /> by manufacturer or color', () => {
    expect(false).toBe(true);
  });

  it('should render "10 of 100 results"', () => {
    expect(false).toBe(true);
  });

  it('should render <List /> of cars', () => {
    expect(false).toBe(true);
  });

  it('should render favorite cars first', () => {
    expect(false).toBe(true);
  });

  it('should render cars manufacturer and model name', () => {
    expect(false).toBe(true);
  });

  it('should render cars stock number, mileage, fuel type and color', () => {
    expect(false).toBe(true);
  });

  it('when click on "View details" should navigate to show car page', () => {
    expect(false).toBe(true);
  });

  describe('should stick elements on scroll or resize', () => {
    it('should stick <Header /> always on top', () => {
      expect(false).toBe(true);
    });

    it('should stick <FilterNav /> always on left top side', () => {
      expect(false).toBe(true);
    });
  });
});
