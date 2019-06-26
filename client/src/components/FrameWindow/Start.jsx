import React from 'react'

const Start = (props) =>
<div className="navbar-start">

    <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
            Examples
        </a>
        <div className="navbar-dropdown is-boxed">
            <a className="navbar-item">
                Coaxial Cable (Open Circuit)
            </a>
            <a className="navbar-item">
                Coaxial Cable (Closed Circuit)
            </a>
            <a className="navbar-item">
                Coaxial Cable (Transmition)
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item">
                RLC Parallel
            </a>
            <a className="navbar-item">
                RLC Series
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item">
                Low-Pass Filter with Lumped
            </a>
            <a className="navbar-item">
                Low-Pass Filter with Microstrip
            </a>
            <hr className="navbar-divider" />
            <a className="navbar-item">
                GSM antenna
            </a>
            <a className="navbar-item">
                Dipole antenna
            </a>
            <a className="navbar-item">
                Patch antenna
            </a>

        </div>
    </div>
</div>

export default Start