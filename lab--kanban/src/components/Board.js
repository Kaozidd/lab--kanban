import React, { Component } from 'react';
import List from './List';

class Board extends Component {
  render() {
    return (
      <div className='container grid'>
        <List />
      </div>
    );
  }
}

export default Board;