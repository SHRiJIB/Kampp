import React from "react";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import { GlobalStyles } from "./GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import NewCampground from "./screens/Campground/NewCampground/NewCampground";
import EditCampground from "./screens/Campground/EditCampground/EditCampground";
function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/new" element={<NewCampground />} />
        <Route path="/:id/edit" element={<EditCampground />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
