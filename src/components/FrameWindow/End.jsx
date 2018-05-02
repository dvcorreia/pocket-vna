import React from 'react'
import FA from 'react-fontawesome'

const End = (props) =>
<div className="navbar-end">
    <p className="navbar-item">
        <strong>v.0.0.1 Alpha</strong>
    </p>

    <div className="navbar-item">
        <div className="field is-grouped">
            <p className="control">
                <a className="button is-link is-rounded is-outlined">
                    <span className="icon">
                        <FA name="upload" />
                    </span>
                    <span>Upload new file!</span> 
                </a>
            </p>
        </div>
    </div>
</div>

export default End