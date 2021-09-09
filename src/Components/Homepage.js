import React, { Component } from 'react';
import wavey from "../Showcase/Wavey.png";
import "../Styles/Homepage.css";


class Homepage extends Component{
    render(){
        return(
            <div className = 'Home'>
                <h1 className = 'Home_title'>Projects</h1>
                <br/>
                <a className = 'Home_project' href = '/PLACEHOLDER'>
                    <img src = {wavey} alt = 'wavey'></img>
                </a>

            </div>
        )
    }
}

export default Homepage;