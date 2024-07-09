import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg"
import Footer from "../components/Footer"
import AboutContent from "../components/AboutContent"
import Form from "../components/Form"
import Data from "../components/Data"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <AboutContent/>

      <Footer/>
    </div>
  );
};

export default Home;