import React from "react";
import { Link } from "react-router-dom";
import classname from "./Navbar.module.scss";
import logo from "../../assets/favicon.png";
const Navbar = () => {
  const [activeNav, setActiveNav] = React.useState(null);
  const navLinks = ["Specialist", "Job", "About"];

  const handleClick = () => {
    setActiveNav(null);
  };
  return (
    <div className={classname.navbarContainer}>
      <ul className={classname.leftNavCntr}>
        <Link to="/">
          <li
            onClick={handleClick}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img className={classname.logo} src={logo} alt="logo" />{" "}
            <span className={classname.blue}>Universal</span>
            <span className={classname.red}>Proffessionals</span>
          </li>
        </Link>
      </ul>
      <ul className={classname.rightNavCntr}>
        {navLinks.map((link, index) => (
          <Link to={`/${link.toLowerCase()}`}>
            <li
              onClick={() => {
                setActiveNav(index);
                console.log(activeNav, index);
              }}
              className={index === activeNav ? classname.active : ""}
            >
              <h2>{link}</h2>
            </li>
          </Link>
        ))}

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
