import React from "react";
import { Link } from "react-router-dom";
import classname from "./Navbar.module.scss";
import logo from "../../assets/favicon.png";
const Navbar = () => {
  return (
    <div className={classname.navbarContainer}>
      <ul className={classname.leftNavCntr}>
        <Link to="/">
          <li style={{ display: "flex", alignItems: "center" }}>
            <img className={classname.logo} src={logo} alt="logo" />{" "}
            <span className={classname.blue}>Universal</span>
            <span className={classname.red}>Proffessionals</span>
          </li>
        </Link>
      </ul>
      <ul className={classname.rightNavCntr}>
        <Link to="/specialist">
          <li>
            <h2>Specialist</h2>
          </li>
        </Link>
        <Link to="/job">
          <li>
            <h2> Job</h2>
          </li>
        </Link>
        <Link to="/about">
          <li>
            <h2>About</h2>
          </li>
        </Link>
        <Link to="/publish">
          <button className={classname.blueBtn}>
            <h2>Publish</h2>
          </button>
        </Link>
        <Link to="/register">
          <li>
            <h2>Sign In</h2>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
