import React, {Component, Fragment} from 'react'
import PolarGraph from './Graphs/PolarGraph.jsx'
import SmithChart from './Graphs/SmithChart.jsx'
import LogMag from './Graphs/LogMag.jsx'

const graphContainer = {
    width: "100%", 
    height: 260
}

export default class Graph extends Component{
    graphDef = {
        color: "#3273dc"
    }

    typeGraphRender(id){
        switch(id){
            case 'smith':
                return <SmithChart />
            case 'polar':
                return <div style={graphContainer}><PolarGraph data={this.props.data} color={this.graphDef.color}/></div>
            case 'logMag':
                return <div style={graphContainer}><LogMag data={this.props.data} color={this.graphDef.color}/></div>
            default: return
        }
    }

    render(){
        return(
            <Fragment>
                {this.typeGraphRender(this.props.graphType)}
            </Fragment>
        )
    }
}