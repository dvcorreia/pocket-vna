import React, {Component} from 'react'
import FA from 'react-fontawesome'

export default class GraphOptions extends Component{

    state = {
        graphName: this.props.graphName,
        exp: this.props.exp
    }

    render(){
        return(
            <div style={{paddingTop: 30}}>
                <div className="field is-grouped">
                    <label className="label">{this.state.graphName} Options</label>
                    <div style={{paddingLeft: 5}}>
                        <a className="button is-small is-rounded is-warning">
                            <span className="icon is-small">
                                <FA name="edit" />
                            </span>
                        </a>
                    </div>
                    <div style={{paddingLeft: 5}}>
                        <a className="button is-small is-rounded is-link">
                            <span className="icon is-small">
                                <FA name="print" />
                            </span>
                        </a>
                    </div>
                </div>
                
                <div className="field is-grouped">
                    
                    <div className="control">
                        <div className="select">
                            <select>
                                <option>Log Magnitude</option>
                                <option>Return Loss</option>
                                <option>Smith Chart</option>
                                <option>Polar</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <label className="radio">
                            <input type="radio" name={this.state.graphName}/>S11
                        </label>
                        <label className="radio">
                            <input type="radio" name={this.state.graphName}/>S21
                        </label>
                        <label className="radio" disabled>
                            <input type="radio" name={this.state.graphName} disabled/>S12
                        </label>
                        <label className="radio" disabled>
                            <input type="radio" name={this.state.graphName} disabled/>S22
                        </label>
                    </div>         
                </div>
            </div>
        )
    }
}