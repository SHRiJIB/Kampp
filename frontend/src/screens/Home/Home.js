import React from "react";
import Camps from "../../components/Campgrounds/Camps";
import Hero from "../../components/Hero/Hero";
import Email from "../../components/NewsLetter/Email";
import Stats from "../../components/stats/Stats";
import TopRated from "../../components/TopRated/TopRated";

const Home = () => {
  return (
    <div>
      <Hero />
      <Camps />
      <TopRated />
      <Stats />
      <Email />
    </div>
  );
};

export default Home;
