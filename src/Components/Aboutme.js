import React, { Component } from 'react'
import "../Styles/Aboutme.css";

class Aboutme extends Component{

    render(){
        return(
            <div className = "about">
                <h2 className = "about__header"> About me </h2>
                    <div className = 'about__description'>
                        <p>
                            I am Aaron Hill, I graduated the University of Connecticut in 2020 with a degree in Computer Science and Engineering.
                            I am currently employed as a full-time software developer and am using this site as a platfrom to showcase my skills 
                            and gain oppurtunities to expand and improve my programming toolkit. 

                            My other passions include working out and snowboarding (begginer level)
                            <br/>
                            I write mostly in python for my full-time postion and Javascript for my side-projects.
                        </p>
                </div>
            </div>
        )
    }
}

export default Aboutme; 