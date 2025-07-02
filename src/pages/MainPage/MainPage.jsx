import React from "react";
import Hero from "../../componets/Hero/Hero";
import Categories from "../../componets/Categories/Categories";
import Cta from "../../componets/Cta/Cta";
import Sale from "../../componets/Sale/Sale";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Cta />
      <Sale />
    </div>
  );
};

export default MainPage;
