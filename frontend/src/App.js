import React from "react";
import Camps from "./components/Campgrounds/Camps";
import NavBar from "./components/Header/NavBar";
import Hero from "./components/Hero/Hero";
import Email from "./components/NewsLetter/Email";
import Footer from "./components/Footer/Footer";
import Stats from "./components/stats/Stats";
import TopRated from "./components/TopRated/TopRated";
import { GlobalStyles } from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Hero />
      <Camps />
      <TopRated />
      <Stats />
      <Email />
      <Footer />
    </>
  );
}

export default App;
