import React from 'react';
// import { Link } from 'react-router-dom';

const Portfolio = (props) => (
  <div className="card">
    <div className="card__content">
      <img 
        className="card__img"
        src={props.img}
        alt=""
        width="100%"
      />
      <div className="card__title">
        <a href={props.url}>{props.title}</a>
      </div>
      <div className="card__lead">
        {props.lead}
      </div>
    </div>
  </div>
);

export default Portfolio;

