import React from 'react';
import './App.css';
import { Display } from '../Display/Display';
import { ButtonDisplay } from '../ButtonDisplay/ButtonDisplay';
import { evaluate } from 'mathjs';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
    };
  }

  handleClick = (e) => {
    e.preventDefault();

    if (e.target.value !== '=') {
      if (e.target.value !== 'AC') {
        this.setState({
          displayValue: this.state.displayValue + e.target.value,
        });
      } else {
        this.setState({
          displayValue: '',
        });
      }
    } else {
      try {
        let calc = evaluate(this.state.displayValue);
        this.setState({
          displayValue: calc,
        });
      } catch (error) {
        this.setState({
          displayValue: 'Error',
        });
      }
    }
  };

  render() {
    return (
      <div className='App'>
        <Display displayValue={this.state.displayValue} />
        <ButtonDisplay handleClick={this.handleClick} />
      </div>
    );
  }
}
