import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../components/Logo';

export default () => (
  <div style={styleNotFound.container}>
    <Logo extraStyle={styleNotFound.logo} />
    <h1>404 - Not Found</h1>
    <p style={styleNotFound.description}>
      Sorry, the page you are looking for does not exist.
      <br />
      You can always go back to the{' '}
      <Link className="default-link" to="/">
        homepage
      </Link>
    </p>
  </div>
);

const styleNotFound = {
  container: {
    margin: 'auto',
    width: '400px',
    textAlign: 'center',
    marginTop: '100px'
  },
  logo: {
    width: '150px'
  },
  description: {
    lineHeight: 2.5
  }
};
