import React, {Component} from 'react'
import FA from 'react-fontawesome'

export default class Search extends Component{

    render(){
        return(
            <div>
                <div className="field is-grouped">
                    <label className="label">Frequency Band</label>
                    <p className="control" style={{paddingLeft: 5}}>
                        <span className="tag is-danger">MHz</span>
                    </p>
                    <p className="help">showing 200 points. change in Definitions</p>
                </div>

                <div className="field is-grouped is-horizontal">
                    
                    <p className="control is-expanded">
                        <input className="input" type="text" placeholder="Minimum"/>
                    </p>
                    <p className="control is-expanded">
                        <input className="input" type="text" placeholder="Maximum"/>
                    </p>

                    <p className="control">
                        <a className="button is-link">Apply</a>
                    </p>
                </div>

                <div className="field is-grouped is-horizontal">
                    <p className="control">
                        <span className="select">
                        <select>
                            <option>Frequency</option>
                            <option>Return Loss</option>
                        </select>
                        </span>
                    </p>

                    <p className="control is-expanded">
                        <input className="input" type="text" placeholder="Value"/>
                    </p>

                    <p className="control">
                        <a className="button is-primary">
                            <FA name="search" />
                        </a>
                    </p>
                </div>

                <div className="field is-grouped is-horizontal is-grouped-centered">
                    <p className="control">
                        <a className="button is-rounded is-small">
                            <FA name="minus" />
                        </a>
                    </p>
        
                    <p className="control">
                        <a className="button is-rounded is-small">
                            <FA name="angle-double-left" />
                        </a>
                    </p>
        
                    <p className="control">
                        <a className="button is-rounded is-small">
                            <FA name="angle-double-right"/>
                        </a>
                    </p>
        
                    <p className="control">
                        <a className="button is-rounded is-small">
                            <FA name="plus" />
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}