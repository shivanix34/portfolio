import "./HeroimgStyles.css";
import IntroImg from "../assets/picture.jpeg";

import React from 'react';
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="Intro" />
        </div>
        <div className="content">
            <p>
                Bachelor of Technology
            </p>
            <p>
                Data Science and Artificial Intelligence
            </p>
            <h1>
                R. Sai Shivani
            </h1>
            <div>
                <Link to="/project" className="btn"> Projects</Link>
            </div>

        </div>
    </div>
  );
}

export default Heroimg;
