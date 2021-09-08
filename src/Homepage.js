import React, { Component } from 'react'
import "./Homepage.css";
import img0 from "./Omoi.jpg";
import Aboutme from './Aboutme';
import Topbar from './Topbar';
import Footer from './Footer';

class Homepage extends Component{
    constructor(props) {
        super(props);
        this.state = {currentDisplay : "", 
                        imgClick : false};
        this.handleImgHover = this.handleImgHover.bind(this);
        this.handleImgClick = this.handleImgClick.bind(this);
      }
    

    handleImgHover(e){
        if (e.type === 'mouseover'){
            this.setState({ currentDisplay : <Aboutme/>})
        }
        if (e.type === 'mouseleave' && this.state.imgClick !== true){
            this.setState({ currentDisplay : false})
        }
    }
    handleImgClick(e){
        if (this.state.imgClick === false){
            this.setState({ currentDisplay : <Aboutme/>, imgClick : true }) 
        }
        else{
            this.setState({ currentDisplay : false, imgClick : false}); 
        }
    }


    render(){
        return(
            <div className = 'Homepage'>
                <h1>
                    <img src = {img0} 
                    alt = "main-faceshot"  
                    onMouseOver ={this.handleImgHover} 
                    onMouseLeave = {this.handleImgHover}
                    onMouseDown = {this.handleImgClick}
                    />
                
                </h1>
                    <Topbar/>
                {this.state.currentDisplay}
                <Footer/>
            </div>
        )
    }
}

export default Homepage;