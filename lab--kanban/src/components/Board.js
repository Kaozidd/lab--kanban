import React, { Component } from 'react';
import List from './List';

class Board extends Component {
 	render() {
 		const data = this.props.data
    	return (
      		<div className='container grid'>
        		<List data={data}/>
      		</div>
    	);
  	}
}

export default Board;