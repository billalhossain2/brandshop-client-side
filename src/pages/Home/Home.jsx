import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import Brands from "./Brands/Brands";
import MostViewed from "./MostViewed/MostViewed";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Brands></Brands>
      <MostViewed></MostViewed>
      <Services></Services>
    </div>
  );
};

export default Home;
