import React, { Component } from 'react';
import logo from '../images/gp.png';
import Proveedor from './pro'

class Form extends Component {
  render() {
    return (
        <form>
          <div>
            <img src={logo} alt="Logo" />
            <section>
              <h2>Bienvenido Candidato Miguel Angel Espinoza Medina</h2>
            </section>
            <input type="submit" name="submit" value="Continuar" onClick= {this.submitForm} />
          </div>
          <div></div>
        </form>
    );
  }
}

export default Form;
