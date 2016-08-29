import React, { Component } from 'react'
import { ChromePicker } from 'react-color'
import Parameter from './Parameter.js'
import ImageGrid from './ImageGrid.js'

import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      parameters: {
        background : {b:0,g:0,r:0,a:1},
        gridSize: 75,
        image: 'http://www.fillmurray.com/400/400'
      }
    }
  }

  handleColorChange = (color) => {
    let temp = this.state.parameters
    temp.background = color.rgb
    this.setState({ parameters : temp })
  }

  handleInputChange = (parameters) => {
    this.setState({ parameters : parameters })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="flexContainer">
          <div className="column">
            <h3>Pick an overlay color:</h3>
            <ChromePicker
              color={ this.state.parameters.background }
              onChangeComplete={this.handleColorChange} />
          </div>
          <div className="column">
            <Parameter parameters={this.state.parameters} fieldName="image" placeholder="Image URL" onInputChange={ (value) => this.handleInputChange(value) } />
            <Parameter parameters={this.state.parameters} fieldName="gridSize" placeholder="Grid Size" onInputChange={ (value) => this.handleInputChange(value) } />
          </div>
        </div>
        <div id="imageGrid">
          <ImageGrid parameters={this.state.parameters} />
        </div>
      </div>
    );
  }

}

export default App;
