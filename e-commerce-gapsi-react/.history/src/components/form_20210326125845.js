import React, { Component } from 'react';
import logo from '../images/gp.png';

class Form extends Component {
  render() {
    return (
        <form>
          <div>
            <img src={logo} alt="Logo" />>
            <input type="submit" name="submit" value="Continuar" onClick= {this.submitForm} />
          </div>
        </form>
    );
  }
}

export default Form;
