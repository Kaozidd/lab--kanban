import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <div className='board'>
            <div className='board__form container'>
              <form>
                <div className='form'>
                  <input ref='newItem' className='form__text' type='text' placeholder='Add new item...' />
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
