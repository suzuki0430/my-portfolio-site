import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../images/profile.jpg'; 

const Header = () => (
  <header>
    <div className="logo">
      <img
        src={Profile}
      />
      <h1>SUZUKI</h1>
    </div>
    <div className="nav">
      <NavLink to="/" activeClassName="is-active" exact={true}>Profile</NavLink>
      <NavLink to="/work" activeClassName="is-active" exact={true}>Works</NavLink>
      <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    </div>
  </header>
);

export default Header;