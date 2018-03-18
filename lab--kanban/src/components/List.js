import React, { Component } from 'react';
import Card from './Card';
import data from '../data/datasource';

class List extends Component {
  	constructor() {
  		super();
  		this.state = {
  		data
  		}
  	}
  	render() {
  		const data = this.state.data[0];
  		data.tasks.push({
  			title: this.props.data,
  			tagged: '.client'
  		})
    	return (
      	<article className='card'>
        	<header>
            	<div className='grid'>
              	<strong className='card__title'>{data.title}</strong>
              	<span className='card__quantity'>`{data.tasks.length} tasks`</span>
            	</div>
            <ul className='card__content'>
            	{data.tasks.map(function(card){
            		return <Card data={card}/>
				})}
            </ul>
          </header>
        </article>
    	);
  	}
}

export default List;