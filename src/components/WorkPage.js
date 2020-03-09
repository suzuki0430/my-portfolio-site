import React from 'react';
import Portfolio from './Portfolio';
import SalonSite from '../images/salon-site.png';
import PortfolioSite from '../images/portfolio-site.png'; 

const WorkPage = (props) => (
  <div>
    <div className="heading">
      <h1>Works</h1>
    </div>
    <div className="wrapper">
      <Portfolio
        img={SalonSite}
        url="https://salon-site-portfolio.herokuapp.com/"
        title="美容室サイト"
        lead="React/Reduxを使い、美容室サイトを作成。"
      />
      <Portfolio
        img={PortfolioSite}
        url=""
        title="ポートフォリオサイト"
        lead="Reactを使い、ポートフォリオサイトを作成。"
      />
    </div>
  </div>
);

export default WorkPage;

// <Link to="/work/1">Item One</Link>
// <Link to="/work/2">Item Two</Link>
