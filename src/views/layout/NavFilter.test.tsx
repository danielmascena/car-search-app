// ETA: 2 hours
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import NavFilter from './NavFilter';
import Label from '../../components/Label';
import reducer from '../../reducers';

afterEach(cleanup);

const store = createStore(reducer);

describe('<NavFilter />', () => {
  it('should render "Color" <Label />', () => {
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <NavFilter />
      </Provider>
    );
    expect(getByLabelText('Color')).toEqual(render(<Label text="Color" />));
  });

  it('should render colors <Select />', () => {
    expect(false).toBe(true);
  });

  it('should render "Manufacturer" <Label />', () => {
    expect(false).toBe(true);
  });

  it('should render manufacturers <Select />', () => {
    expect(false).toBe(true);
  });

  it('should render "Filter" <Button />', () => {
    expect(false).toBe(true);
  });

  it('should change address bar to selected values on "Filter" press', () => {
    /* Valid combinations:
     ?color=black&manufacturer=BMW
     ?color=black&manufacturer=
     ?color=&manufacturer=BMW
     ?color=&manufacturer=
     ?color=black
     ?manufacturer=BMW
     ?color=
     ?manufacturer=
     ?
    */
    expect(false).toBe(true);
  });
});
