import React, { Component } from 'react'
import Content from './Content/Content.jsx'
import FrameWindow from './FrameWindow/FrameWindow.jsx'
import Footer from './FrameWindow/Footer.jsx'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FrameWindow />
        <Content />
      </div>
    )
  }
}