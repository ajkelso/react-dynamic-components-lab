import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  renderBoxes = () => {

  }


  render() {
    const newValue = this.props.opacity - .1
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity < .2 ? null : ( 
          <ColorBox opacity= {newValue} />
        )}
      </div>
    )
  }

}