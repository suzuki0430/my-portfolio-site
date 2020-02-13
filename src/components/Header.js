import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../images/profile.jpg'; 

class Header extends React.Component {
  componentDidMount() {
    const nav = document.querySelector('.nav');
    const topOfNav = nav.offsetTop;

    const fixNav = () => {
      if(window.scrollY >= topOfNav) {
        //bodyのpaddingTopをoffsetHeightに固定
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
      };
    };
    window.addEventListener('scroll', fixNav);
  }

  render() {
    return (
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
  };
};

export default Header;
