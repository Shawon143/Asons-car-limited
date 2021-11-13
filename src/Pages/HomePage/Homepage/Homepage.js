import React from "react";
import Banner from "../Banner/Banner";
import HomeReview from "../HomeReview/HomeReview";
import Overview from "../Overview/Overview";
import Products from "../Products/Products";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <HomeReview></HomeReview>
      <Overview></Overview>
    </div>
  );
};

export default Homepage;
