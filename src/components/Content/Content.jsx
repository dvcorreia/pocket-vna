import React, { Component, Fragment } from 'react'
import Graph from './Graph.jsx'
import Search from './Search.jsx'
import GraphOptions from './Graphs/GraphOptions.jsx'

import dfdata from './Graphs/data.json'

export default class Content extends Component {

    state = {
        data: {}
    }


    componentWillUpdate() {
        console.log("newData\n")
        console.log(this.props.data.p11)
        this.render()
    }

    render() {


        return (
            <Fragment>
                <div style={{ padding: 10 }}>

                </div>

                <div id="content" className="columns">
                    <div className="column is-three-quarters" style={{
                        paddingTop: 0,
                        paddingLeft: 20
                    }}>
                        <Graph data={this.props.data.p11} type="smith" graphType='polar' />
                        <Graph data={this.props.data.p21} type="polar" graphType='smith' />
                    </div>
                    <div className="column" style={{
                        paddingRight: 25
                    }}>
                        <Search />
                        <hr />
                        <GraphOptions graphName="Graph 1" exp="MHz" />
                        <hr />
                        <GraphOptions graphName="Graph 2" exp="MHz" />
                    </div>
                </div>


            </Fragment>
        )
    }

}