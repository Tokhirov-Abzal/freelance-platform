import React from "react";
import SpecCategory from "../components/SpecCategory/SpecCategory";

// Images
import logoArch from "../assets/categories/engineering.png";
import logoEdu from "../assets/categories/edu.png";
import logoLaw from "../assets/categories/law.png";

const categories = [
  {
    id: 1,
    icon: logoArch,
    title: "Engineering & Architecture",
    count: 4000,
  },
  {
    id: 2,
    icon: logoEdu,
    title: "Education & training",
    count: 300,
  },
  {
    id: 3,
    icon: logoLaw,
    title: "Legal",
    count: 700,
  },
];

const Specialist = () => {
  return (
    <div>
      <SpecCategory category={categories} />
    </div>
  );
};

export default Specialist;
