import React, { Component } from 'react'
import PolarGraph from './Graphs/PolarGraph.jsx'
import Controls from './Controls.jsx'
import SmithChart from './Graphs/SmithChart.jsx'

import data from './Graphs/data.json'

export default class Content extends Component{
    render(){

        const graphContainer = {
            width: "100%", 
            height: 600
        }

        const columnParams = {
            padding: 20
        }

        return(
            <div id="content" className="columns">
                <div className="column" style={columnParams}>
                    <Controls />
                    <div style={graphContainer}>
                        <PolarGraph data={data.p11} color="#3273dc"/>
                    </div>
                </div>
                <div className="column" style={columnParams}>
                    <Controls />
                    <div style={graphContainer}>
                        <SmithChart />
                    </div>
                </div>
            </div>
        )
    }
}