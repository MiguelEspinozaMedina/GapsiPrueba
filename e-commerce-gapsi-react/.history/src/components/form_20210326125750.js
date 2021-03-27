import React, { Component } from 'react';
import logo from '../images/gp.png';

class Form extends Component {
  render() {

  

    return (
        <form>
          <div>
            <section>
              <h2>Bienvenido Candidato Miguel Angel Espinoza Medina</h2>
            </section>
            <img src={logo} alt="Logo" />>
            <input type="submit" name="submit" value="Continuar" onClick= {this.submitForm} />
          </div>
        </form>
    );
  }
}

export default Form;
