import React, { Component } from 'react'
import "./Homepage.css";
import img0 from "./Omoi.jpg";
import Aboutme from './Aboutme';
import Topbar from './Topbar';

class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {currentDisplay : ""};
        this.handleImgEnter = this.handleImgEnter.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.handleImgClick = this.handleImgClick(this);
      }
    

    handleImgEnter(e){
        this.setState({ currentDisplay : <Aboutme/>})
    }
    handleImgClick(e){
        this.setState ({ currentDisplay : <Aboutme/>})
    }

    handleExit(e){
        this.setState({ currentDisplay :false})
    }

    render(){
        return(
            <div className = 'Homepage'>
                <h1>
                    <img src = {img0} 
                    alt = "main-faceshot"  
                    onMouseEnter ={this.handleImgEnter} 
                    onMouseLeave = {this.handleExit}
                    onClick = {this.handleImgClick}/>
                </h1>
                <span>
                    <Topbar/>
                </span>
                {this.state.currentDisplay}
            </div>
        )
    }
}

export default Homepage;