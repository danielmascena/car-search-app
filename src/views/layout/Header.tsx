import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import './Header.css';

const Header: React.FC = () => (
  <header className="main-header">
    <Link className="home-link" to="/">
      <Logo logoId="logo-brand" />
    </Link>
    <nav className="main-navbar">
      <span role="link">Purchase</span>
      <Link to="/favorites">My Orders</Link>
      <span role="link">Sell</span>
    </nav>
  </header>
);

export default Header;
