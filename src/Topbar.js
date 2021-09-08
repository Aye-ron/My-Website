import React, { Component } from 'react'
import "./Topbar.css";
import Pdf from "./resume.pdf";


class Topbar extends Component{

    render(){
        const LinkSeparator = () => <span className="top-bar__link-separator">|</span>;

        return(
            <div className="top-bar">
                <div className="top-bar__links">
                
                <a className="top-bar__link" href="/" onClick = {this.props.toggleHomePage}>
                    Home
                </a>
                <LinkSeparator />

                <a className="top-bar__link" href={Pdf}>
                    Resume
                </a>
                <LinkSeparator />

                <a className="top-bar__link" href="https://github.com/Aye-ron">
                    GitHub
                </a>
                <LinkSeparator />

                <a className="top-bar__link" href="mailto:aaron.alexander.hill@gmail.com">
                Email
                </a>
                </div>

            </div>

        )
    }
}


export default Topbar;