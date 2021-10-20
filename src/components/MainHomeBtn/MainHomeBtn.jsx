import React from "react";
import searchLogo from "../../assets/search.png";
import classname from "./MainHomeBtn.module.scss";

const mainHomeBtn = ({ title }) => {
  return (
    <div className={classname.container}>
      <img src={searchLogo} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

export default mainHomeBtn;
