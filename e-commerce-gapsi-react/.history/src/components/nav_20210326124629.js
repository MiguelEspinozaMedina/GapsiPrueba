import React, { Component } from 'react';

<img src={logo} alt="Logo" />
class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Design<span>Labs</span></li>
          </ul>
          <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Mission</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
