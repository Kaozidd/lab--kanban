import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='header'>
          <div className='container'>
            <div className='grid'>
              <div>
                <p>Mr. Robot Notebook</p>
              </div>
              <div>
                <span>Loggued as <strong>Mr. Know it All</strong></span>
                <a href='#' className='header__link'><strong>Log out</strong></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;