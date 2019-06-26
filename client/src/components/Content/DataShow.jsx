import React, {Component} from 'react'

export default class DataShow extends Component{
    render(){
        return(
            <div className="content" style={{
                padding: 20
            }}>
                <h4>SXP File Information:</h4>
                <table>
                    <tbody>
                    <tr>
                        <th>File Type</th>
                        <td>{this.props.data.params}</td>
                    </tr>
                    <tr>
                        <th>Frequency Scale</th>
                        <td>{this.props.data.fscale}</td>
                    </tr>
                    <tr>
                        <th>Data Format</th>
                        <td>{this.props.data.format}</td>
                    </tr>
                    <tr>
                        <th>Load</th>
                        <td>{this.props.data.load}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}