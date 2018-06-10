import React, { Component, Fragment } from 'react'
import Search from './Search.jsx'
import DataShow from './DataShow.jsx'

import SmithChart from './Graphs/SmithChart.jsx'
import LogMag from './Graphs/LogMag.jsx'

const graphContainer = {
    width: "100%", 
    height: 260
}

export default class Content extends Component{
    state = {
        color: "#3273dc"
    }

    render(){
        return(
            <Fragment>
                <div id="content" className="columns">
                    <div className="column is-three-quarters" style={{ padding: 15 }}>

                        <div style={graphContainer}>
                            <LogMag 
                                data={this.props.data.p11} 
                                color={this.state.color}/>
                        </div>

                        <div style={graphContainer}>
                            <LogMag 
                                data={this.props.data.p11} 
                                color={this.state.color}/>
                        </div>

                    </div>
                    <div className="column" style={{ padding: 25 }}>

                        <Search onChangeBW={this.props.onChangeBW}/>

                        <hr/>

                        <DataShow data={this.props.data}/>

                    </div>
                </div>

                <div id="content" className="columns is-centered">
                    <div className="column is-three-quarters">
                        <SmithChart />
                    </div>
                </div>
            </Fragment>
        )
    }
}