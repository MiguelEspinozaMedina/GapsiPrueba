import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1>e-Commerce Gapsi</h1>
            <div>
              <p></p>
              <!<<<div><a className="contact" href="#">Contactanos.</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;