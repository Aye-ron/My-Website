import React, { Component } from 'react'
import "./Homepage.css";
import img0 from "./Omoi.jpg";

class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.aboutMe = this.aboutMe.bind(this);
      }
    
    aboutMe(){
        console.log('yes');
    }

    render(){
        return(
            <div className = 'Homepage'>
                <h1>
                    <img src = {img0} alt = "main-faceshot"  onClick = {this.aboutMe}/>
                </h1>
            </div>
        )
    }
}

export default Homepage;