import React, { Component } from 'react'

class Parameter extends Component {
    handleChange = (event) => {
      let temp = this.props.parameters
      temp[this.props.fieldName] = event.target.value
      this.props.onInputChange(temp)
    }
    render() {
      let params = this.props.parameters
      return (
        <div>
          <label>{this.props.placeholder}</label>
          <input type="text" placeholder={this.props.placeholder} value={params[this.props.fieldName]} onChange={ this.handleChange } />
        </div>
      )
    }
}

export default Parameter
