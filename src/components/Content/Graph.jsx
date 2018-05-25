import React, {Component, Fragment} from 'react'
import PolarGraph from './Graphs/PolarGraph.jsx'
import SmithChart from './Graphs/SmithChart.jsx'
import GraphOptions from './Graphs/GraphOptions.jsx'

const graphContainer = {
    width: "100%", 
    height: 200
}

export default class Graph extends Component{

    state = {
        data: this.props.data,
        type: this.props.graphType,
        color: "#3273dc"
    }

    typeGraphRender(id){
        switch(id){
            case 'smith':
                return <SmithChart />
            case 'polar':
                return <PolarGraph data={this.state.data} color={this.state.color}/>
            default: return
        }
    }

    render(){
        return(
            <Fragment>
                <div style={graphContainer}>
                    {this.typeGraphRender(this.state.type)}
                </div>
            </Fragment>
        )
    }
}