import React from "react";
import "./SpecCategory.scss";

const SpecCategory = ({ category }) => {
  return (
    <div className="cat_container">
      {category.map((obj) => (
        <div className="cat_block">
          <i>
            <img className="catLogo" src={obj.icon} alt={obj.title} />
          </i>
          <div className="cat_title">
            <h3>{obj.title}</h3>
            <h4>{obj.count} freelancers</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecCategory;
