import React, { Component } from 'react';
import './Button.css';
export class Button extends Component {
  render() {
    const { value, onClick } = this.props;
    const tobeOrange = ['=', '+', '-', '*', '*'];
    const classType = `button${tobeOrange.includes(value) ? ' orange' : ''}`;
    return (
      <button value={value} onClick={onClick} className={classType}>
        {value}
      </button>
    );
  }
}
