import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Data from "../components/Data";

const Project = () => {
  return (<div>
    <Navbar/>
    <Heroimg2 heading="PROJECTS" text="These are my works"/>
    <Data/>
    <Footer/>
  </div>
  );
};

export default Project;