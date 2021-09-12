import React, { Component } from 'react';
import wavey from "../Showcase/Wavey.png";
import waveyPreview from "../Showcase/WaveyPreview.mp4";
import "../Styles/Homepage.css";


class Homepage extends Component{
    static defaultProps = {
        wavey : <img src = {wavey} alt = 'wavey' />
        };
    constructor(props){
        super(props);
        this.state = {waveyDisplay : this.props.wavey};             //when have multiple projects can make display a list that you alter based on mouse movements
        this.displayWavey = this.displayWavey.bind(this);
      }
    displayWavey(e){
        if (e.type === 'mouseover'){        
                this.setState({waveyDisplay :
                <div className = 'Home_project_wtext'>
                    <h1 className="Home_project_title"> Wavey </h1>
                        <video width="320" height="240" autoplay="autoplay" loop="loop"  muted = {true} >
                        <source src={waveyPreview} type="video/mp4"/>
                        </video>
                    <br/>
                    <div className="Pokecard-data"> Description </div>
                </div>
                });
        }
        else {
            this.setState({waveyDisplay : this.props.wavey})
        }

        ;
    }
    
    render(){
        return(
            <div className = 'Home'>
                <h1>Projects</h1>
                <br/>
                <br/>
                <a className = 'Home_project' 
                    href = '/PLACEHOLDER' 
                    onMouseOver ={this.displayWavey}
                    onMouseLeave = {this.displayWavey}
                    >
                    {this.state.waveyDisplay}
                </a>

            </div>
        )
    }
}

export default Homepage;