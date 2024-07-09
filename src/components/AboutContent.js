import "./AboutContentStyles.css";
import profile1 from "../assets/profile1.png";
import React from 'react';
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>A bit about myself.</h1>
        <p>Hey there! I'm a passionate and driven B.Tech undergrad specializing in Data Science and Artificial Intelligence at IIIT Naya Raipur. I thrive on challenges, love to learn, and excel in teamwork and communication.</p>
        
        <h2>Leadership & Involvement</h2>
        <p>
          Junior Placement Coordinator, T&P Cell, IIIT NR <br />
          Ex-Media & IT Cell Secretary, Student Activity Center, IIIT NR <br />
          Shutterbug Secretary, Photography Club, IIIT NR
        </p>

        <h2>Experience Highlights</h2>
        <p>Graphic Designer @ Workzera, Raipur</p>

        <Link to="/Contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={profile1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
