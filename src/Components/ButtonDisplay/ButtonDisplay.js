import React, { Component } from 'react';
import { Button } from '../Button/Button';
import './ButtonDisplay.css';
export class ButtonDisplay extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className='ButtonDisplay'>
        <Button value={'AC'} onClick={handleClick} />
        <Button value={'+/-'} onClick={handleClick} />
        <Button value={'%'} onClick={handleClick} />
        <Button value={'/'} onClick={handleClick} />

        <Button value={7} onClick={handleClick} />
        <Button value={8} onClick={handleClick} />
        <Button value={9} onClick={handleClick} />
        <Button value={'*'} onClick={handleClick} />

        <Button value={4} onClick={handleClick} />
        <Button value={5} onClick={handleClick} />
        <Button value={6} onClick={handleClick} />
        <Button value={'-'} onClick={handleClick} />

        <Button value={1} onClick={handleClick} />
        <Button value={2} onClick={handleClick} />
        <Button value={3} onClick={handleClick} />
        <Button value={'+'} onClick={handleClick} />

        <Button value={0} onClick={handleClick} />
        <Button value={'.'} onClick={handleClick} />
        <Button value={'='} onClick={handleClick} />
      </div>
    );
  }
}
