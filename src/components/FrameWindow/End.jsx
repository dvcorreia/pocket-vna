import React from 'react'
import FA from 'react-fontawesome'

export default class End extends React.Component {

    sendDataUp = (data) => {
        this.props.callbackFromParent(data)
    }

    fileSelectHandler = (event) => {
        console.log(event.target.files[0])
        console.log(event.target.files[0].name)
        var sxf = {};
        var reader = new FileReader();
        reader.onload = (event) => {
            // The file's text will be printed here
            // console.log(event.target.result)
            var lines = event.target.result.split('\n').filter((x) => {
                return x.charAt(0) !== '!'
            });
            this.sendDataUp(lines)
        };

        reader.readAsText(event.target.files[0])

    }

    render() {
        return (
            <div className="navbar-end">
                <div className="navbar-item">
                    <a class="button is-success is-rounded is-small">
                        <span class="icon">
                            <FA class="fab" name="question-circle" />
                        </span>
                        <span>FAQ</span>
                    </a>
                </div>

                <div className="navbar-item">
                    <div className="field is-grouped">

                        <div className="file">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" onChange={this.fileSelectHandler} />
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