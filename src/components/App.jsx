import React, { Component } from 'react'
import Content from './Content/Content.jsx'
import FrameWindow from './FrameWindow/FrameWindow.jsx'

export default class App extends Component {

  state = {
    data: { 
      fscale: "?",
      format: "?",
      load: "?",
      params: "?",
      p11: [], 
      p21: [] },
    bandwidth: {
      min: '',
      max: ''
    }
  }

  fileUpdateCallback = (file) => {
    console.log(file.target.files[0])
  }

  changeBandwidth = (values) => {
    this.setState({
      bandwidth: {
        min: values.min,
        max: values.max
      }
    })
  }

  render() {
    return (
      <div className="App">
        <FrameWindow fileOnUpload={this.fileUpdateCallback}/>
        <Content 
            data={this.state.data} 
            onChangeBW={this.changeBandwidth}/>
      </div>
    )
  }
}