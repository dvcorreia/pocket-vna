import React, { Component, Fragment } from 'react'
import Graph from './Graph.jsx'
import Search from './Search.jsx'
import DataShow from './DataShow.jsx'

//import dataDummy from './Graphs/data.json'

export default class Content extends Component{
    render(){
        return(
            <Fragment>
                <div id="content" className="columns">
                    <div className="column is-three-quarters" style={{
                        padding: 15
                    }}>
                        <Graph 
                            data={this.props.data.p21} 
                            graphType='polar'/>
                        <Graph 
                            data={this.props.data.p11} 
                            graphType='logMag'/>
                    </div>
                    <div className="column" style={{
                        padding: 25
                    }}>
                        <Search onChangeBW={this.props.onChangeBW}/>
                        <hr/>
                        <DataShow data={this.props.data}/>
                    </div>
                </div>
                <div id="content" className="columns is-centered">
                    <div className="column is-three-quarters">
                        <Graph data={this.props.data.p11} graphType='smith'/>
                    </div>
                </div>
            </Fragment>
        )
    }
}