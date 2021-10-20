import React from "react";
import classname from "./stlyles/Home.module.scss";
import MainHomeBtn from "../components/MainHomeBtn/MainHomeBtn";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={classname.container}>
      <Link to="/job">
        <MainHomeBtn title={"Search jobs"} />
      </Link>
      <Link to="/specialist">
        <MainHomeBtn title={"Search talents"} />
      </Link>
    </div>
  );
};

export default Home;
