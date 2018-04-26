import React from 'react'
const img = require('../../assets/logo.png')

const logoStyle = {
    "height" : 28
}

const Logo = (props) => 

<div className="navbar-brand">
    <a className="navbar-item">
        <img 
            src={img} 
            alt={"POCKET-VNA"}
            style={logoStyle} 
            />
    </a>

    <div className="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>

export default Logo