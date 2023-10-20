import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import Brands from "./Brands/Brands";
import MostViewed from "./MostViewed/MostViewed";
import Services from "./Services/Services";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner/Banner";

const Home = () => {
  useTitle("Home - Tech Store")
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <MostViewed></MostViewed>
      <Services></Services>
    </div>
  );
};

export default Home;
