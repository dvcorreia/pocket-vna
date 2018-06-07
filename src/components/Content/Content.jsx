import React, { Component, Fragment } from 'react'
import Graph from './Graph.jsx'
import Search from './Search.jsx'
import GraphOptions from './Graphs/GraphOptions.jsx'

//const s2p = require('sxp-to-json')

import data from './Graphs/data.json'

//let sxp = new s2p('./RLCpar.s2p')

export default class Content extends Component{


    render(){


        return(
            <Fragment>
                <div id="content" className="columns">
                    <div className="column is-three-quarters" style={{
                        padding: 15
                    }}>
                        <Graph data={data.p21} graphType='polar'/>
                        <Graph data={data.p11} graphType='logMag'/>
                    </div>
                    <div className="column" style={{
                        padding: 25
                    }}>
                        <Search/>
                        <GraphOptions graphName="Graph 1" exp="MHz"/>
                        <GraphOptions graphName="Graph 2" exp="MHz"/>
                    </div>
                </div>
                <div id="content" className="columns is-centered">
                    <div className="column is-three-quarters">
                        <Graph data={data.p11} graphType='smith'/>
                    </div>
                </div>
            </Fragment>
        )
    }
}