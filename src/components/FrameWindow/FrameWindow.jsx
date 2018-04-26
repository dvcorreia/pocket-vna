import React, { Component } from 'react'
import Logo from './Logo.jsx'
import Start from './Start.jsx'
import End from './End.jsx'

export default class FrameWindow extends Component{  
    render() {
        return(
            <nav className="navbar">
                <Logo />
                <div className="navbar-menu">
                    <Start />
                    <End />
                </div>
            </nav>
        )
    }
}