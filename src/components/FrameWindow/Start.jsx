import React from 'react'


const Start = (props) =>
<div className="navbar-start">

    <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
            Menu
        </a>
        <div className="navbar-dropdown is-boxed">
            <a className="navbar-item">
                Themes
            </a>
            <a className="navbar-item">
                Definitions
            </a>
        </div>
    </div>

    <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
            Examples
        </a>
        <div className="navbar-dropdown is-boxed">
            <a className="navbar-item">
                Capacitor
            </a>
            <a className="navbar-item">
                Coil
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item">
                Ballun
            </a>
            <a className="navbar-item">
                λ/4 Transmition Line
            </a>
        </div>
    </div>
</div>

export default Start