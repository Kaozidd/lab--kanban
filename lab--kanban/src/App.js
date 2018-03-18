import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Board from './components/Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }
  addCard = (e) => {
    e.preventDefault();
    const val = this.state.value;
    console.log(val);
    this.setState({
      value: ''
    })
  }
  render() {
    return (
      <div>
        <Header />
        <section>
          <div className='board'>
            <div className='board__form container'>
              <form onSubmit={this.addCard} name='form'>
                <div className='form'>
                  <input ref='newItem' 
                    className='form__text' 
                    type='text' 
                    placeholder='Add new item...'
                    value={this.state.value}
                    onChange={this.handleChange} 
                    onSubmit={this.reset}/>
                  <button className='form__submit' type='submit'>Add new</button>
                </div>
              </form>
            </div>
            <Board />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
