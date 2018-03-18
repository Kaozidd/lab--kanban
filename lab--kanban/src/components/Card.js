import React, { Component } from 'react';

class Card extends Component {
  	render() {
  		const data = this.props.data;
    	return (
      	<li className='card__item'>
        	<p>{data.title}</p>
        	<small className='card__legend'>{data.tagged}</small>
        	<button className='card__action'>
          	<i className='fa fa-times'></i>
        	</button>
      	</li>
    	);
  	}
}

export default Card;