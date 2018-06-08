import React, { Component } from 'react'
import Content from './Content/Content.jsx'
import FrameWindow from './FrameWindow/FrameWindow.jsx'
var sxp = require('sxp-to-json')


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { 'p11': [], 'p21': [] }
    };
  }

  fileCallBack = (updata) => {
    console.log(typeof updata)
    this.setState({ data: new sxp(updata) })
    console.log(this.state.data)
  }


  render() {
    return (
      <div className="App">
        <FrameWindow callbackFromParent={this.fileCallBack} />
        <Content data={this.state.data} />
      </div>
    )
  }
}