import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <li className='card__item'>
        <p>Issue #3. No API Authentication Endpoint.</p>
        <small className='card__legend'>.internal</small>
        <button className='card__action'>
          <i className='fa fa-times'></i>
        </button>
      </li>
    );
  }
}

export default Card;