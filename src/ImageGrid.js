import React, { Component } from 'react'

class ImageGrid extends Component {
  render(){
    let bgc = function(parameters,opacity){
      return 'rgba('+parameters.background.r+','+parameters.background.g+','+parameters.background.b+','+opacity+')'
    }
    let gridSize = this.props.parameters.gridSize
    let imageWidth = ((100/gridSize)) + '%'
    let images = []
    let gridArea = gridSize * gridSize
    for (var i = 0; i < gridArea; i++) {
      let opacity = ((Math.random() * (1000 - 0) + 200) / 1000);
      images.push(<div className="image" style={{width:imageWidth}} key={i}>
                    <img role="presentation" src={this.props.parameters.image} />
                    <div className="overlay" style={{position:'absolute',width:'100%',height:'100%',left:0,top:0,backgroundColor:bgc(this.props.parameters,opacity)}}></div>
                  </div>); 
    }
    return (
      <div className="flex">
        { images }
      </div>
    )
  }
}

export default ImageGrid
