import React from "react";

const Portfolio = ({ img, url, title, lead }) => (
  <div className="card">
    <div className="card__content">
      <img className="card__img" src={img} alt="" width="100%" />
      <div className="card__title">
        <a href={url}>{title}</a>
      </div>
      <div className="card__lead">{lead}</div>
    </div>
  </div>
);

export default Portfolio;
