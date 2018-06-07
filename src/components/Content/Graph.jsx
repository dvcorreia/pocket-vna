import React, {Component, Fragment} from 'react'
import PolarGraph from './Graphs/PolarGraph.jsx'
import SmithChart from './Graphs/SmithChart.jsx'
import LogMag from './Graphs/LogMag.jsx'

const graphContainer = {
    width: "100%", 
    height: 260
}

export default class Graph extends Component{

    state = {
        data: this.props.data,
        graphType: this.props.graphType,
        color: "#3273dc"
    }

    typeGraphRender(id){
        switch(id){
            case 'smith':
                return <SmithChart />
            case 'polar':
                return <div style={graphContainer}><PolarGraph data={this.state.data} color={this.state.color}/></div>
            case 'logMag':
                return <div style={graphContainer}><LogMag data={this.state.data} color={this.state.color}/></div>
            default: return
        }
    }

    render(){
        return(
            <Fragment>
                {this.typeGraphRender(this.state.graphType)}
            </Fragment>
        )
    }
}