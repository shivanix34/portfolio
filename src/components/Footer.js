import "./FooterStyles.css"

import React from 'react'
import {FaHome , FaPhone, FaMailBulk, FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white",marginRight: "2rem" }}/>
                    <div>
                        <h4>Raman House, IIIT Naya Raipur,</h4>
                        <h4>Raipur, C.G., 493661.</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"white",marginRight: "2rem"}}/>+91 8319734621</h4>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{color:"white",marginRight: "2rem"}}/>
                    <div>
                        <h4>saishivani0304@gmail.com</h4>
                        <h4>r22102@iiitnr.edu.in</h4>
                    </div>
                </div>
            </div>
            <div className="right">
                <h4>Student @ IIIT NR</h4>
                <p>Pursuing BTech in Data Science & Artificial Intelligence</p>
                <div className="social">
            <a href="https://www.linkedin.com/in/rsaishivani/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
            </a>
            <a href="https://www.instagram.com/psy.shivani?igsh=MW9yeHltaDhnZ2FiZw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} style={{ color: "white", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/shivanix34" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ color: "white", marginRight: "1rem" }} />
            </a>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Footer