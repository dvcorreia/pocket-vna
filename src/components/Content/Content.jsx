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
                <div style={{padding: 10}}>
                    
                </div>

                <div id="content" className="columns">
                    <div className="column is-three-quarters" style={{
                        paddingTop: 0,
                        paddingLeft: 20
                    }}>
                        <Graph data={data.p11} type="smith" graphType='polar'/>
                        <Graph data={data.p11} type="polar" graphType='smith'/>
                    </div>
                    <div className="column" style={{
                        paddingRight: 25
                    }}>
                        <Search/>
                        <hr/>
                        <GraphOptions graphName="Graph 1" exp="MHz"/>
                        <hr/>
                        <GraphOptions graphName="Graph 2" exp="MHz"/>
                    </div>
                </div>

                
            </Fragment>
        )
    }
}