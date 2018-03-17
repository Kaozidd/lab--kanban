import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
  render() {
    return (
      <article className='card'>
          <header>
            <div className='grid'>
              <strong className='card__title'>To Do</strong>
              <span className='card__quantity'>120 tasks</span>
            </div>
            <ul className='card__content'>
              <Card />
            </ul>
          </header>
        </article>
    );
  }
}

export default List;