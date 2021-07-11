import React from "react";
import Camps from "./components/Campgrounds/Camps";
import NavBar from "./components/Header/NavBar";
import Hero from "./components/Hero/Hero";
import { GlobalStyles } from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Hero />
      <Camps />
    </>
  );
}

export default App;
