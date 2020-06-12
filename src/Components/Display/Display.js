import React, { Component } from 'react';
import './Display.css';
export class Display extends Component {
  render() {
    const { displayValue } = this.props;
    return (
      <div className='display'>
        <h1>{displayValue}</h1>
      </div>
    );
  }
}
