// ETA: 30 minutes
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from './Footer';

afterEach(cleanup);

describe('<Footer />', () => {
  it('should render "© Fake Car Group 2019"', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Fake Car/i).textContent).toBe('© Fake Car Group 2019');
  });
});
