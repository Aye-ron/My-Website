import React, { Component } from 'react'
import "../Styles/Mainpage.css";
import img0 from "../Showcase/Omoi.jpg";
import Aboutme from './Aboutme';
import Topbar from './Topbar';
import Footer from './Footer';
import Homepage from './Homepage';

class Mainpage extends Component{
    constructor(props) {
        super(props);
        this.state = {currentDisplay : <Homepage/>, 
                        imgClick : false};
        this.handleImgHover = this.handleImgHover.bind(this);
        this.handleImgClick = this.handleImgClick.bind(this);
        this.toggleHomePage = this.toggleHomePage.bind(this);
      }
    

    handleImgHover(e){
        if (e.type === 'mouseover'){
            this.setState({ currentDisplay : <Aboutme/>})
        }
        if (e.type === 'mouseleave' && this.state.imgClick !== true){
            this.setState({ currentDisplay : <Homepage/>})
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
    toggleHomePage(){
        this.setState({currentDisplay : <Homepage/>, imgClick : false})
    }


    render(){
        return(

            <div className = 'Mainpage'>
                <h1>
                    <img src = {img0} 
                    alt = "main-faceshot"  
                    onMouseOver ={this.handleImgHover} 
                    onMouseLeave = {this.handleImgHover}
                    onMouseDown = {this.handleImgClick}
                    />
                
                </h1>
                    <Topbar toggleHomePage = {this.toggleHomePage} />
                {this.state.currentDisplay}
                <Footer/>
            </div>
        )
    }
}

export default Mainpage;