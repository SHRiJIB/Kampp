import React from "react";
import NavBar from "./components/Header/NavBar";
import Hero from "./components/Hero/Hero";
import { GlobalStyles } from "./GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Hero />
    </>
  );
}

export default App;
