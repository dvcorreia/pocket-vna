import React, { Component } from 'react'
import FA from 'react-fontawesome'
import FAQModel from './FAQModal.jsx'

export default class End extends Component{

    state = { showFAQModel: false }

    handleToggleFAQModel = () =>{
        this.setState({
            showFAQModel: !this.state.showFAQModel
        })
    }

    render(){
        return(
            <div className="navbar-end">
                <div className="navbar-item">
                    <a className="button is-success is-rounded is-small" onClick={this.handleToggleFAQModel}>
                        <span className="icon">
                        <FA className="fab" name="question-circle"/>
                        </span>
                        <span>FAQ</span>
                    </a>
                </div>

            <FAQModel active={this.state.showFAQModel} onToggle={this.handleToggleFAQModel}/>

                <div className="navbar-item">
                    <div className="field is-grouped">

                        <div className="file">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" onChange={this.props.fileOnUpload} />
                                <span className="file-cta">
                                <span className="file-icon">
                                    <FA name="upload" />
                                </span>
                                <span className="file-label">
                                    Choose a s2p file…
                                </span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}