import React, { Component } from 'react';
import styled from 'styled-components';
import {useTable,usePagination} from 

class Proveedores extends Component {
  render() {
    return (
      <nav>
          <ul>
          <img src={logo} alt="Logo" />
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

export default Proveedores;
