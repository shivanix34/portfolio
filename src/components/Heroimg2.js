import "./Heroimg2Styles.css"
import Intro from "../assets/img.jpg"

import React, { Component } from 'react'

class Heroimg2 extends Component {
    render(){
        return (
            <div className="hero-img">
                <div className="heading">
                    <h1>
                        {this.props.heading}
                    </h1>
                    <p>
                        {this.props.text}
                    </p>
                </div>     
                <img className="img-intro" src={Intro} alt="Introimg"/>
            </div>
        )
    }
}

export default Heroimg2