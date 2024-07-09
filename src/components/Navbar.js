import "./NavbarStyles.css"

import React, { useState } from 'react'
import { FaBars , FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom"

const Navbar = () => {
  const[click,set]=useState(false);
  const handle = () => set(!click);  

  const[color,setclr]=useState(false);
  const changeclr = () => {
    if(window.scrollY >=100){
        setclr(true);
    }else{
        setclr(false);
    }
  };

  window.addEventListener("scroll",changeclr);

  return (
    <div className={color ? " header header-bg" : "header"}>
        <Link to="/">
        <h1>Portfolio</h1>
        </Link>
        <u1 className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/project">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </u1>
        <div className="hamburger" onClick={handle} >
            {click ? (<FaTimes size={20} style={{color : "white"}}/>) : (<FaBars size={20} style={{color : "white"}}/>)}
        </div>
    </div>
  );
};

export default Navbar