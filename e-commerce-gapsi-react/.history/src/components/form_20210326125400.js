import React, { Component } from 'react';
import logo from '../images/gp.png';

class Form extends Component {
  constructor(){
      super();
      this.state = {
          name : "",
          email : "",
          message : "",
          formError: false
      }
  }

  
  //send the form
  submitForm = (e) =>{
 
  }

  render() {

  

    return (
        <form>
          <div>
            <section>
            <h2>Bienvenido Candidato Miguel Angel Espinoza Medina</h2>
        </section>
            <img src={logo} alt="Logo" />>
            <input type="submit" name="submit" value="Send" onClick= {this.submitForm} />
          </div>
        </form>
    );
  }
}

export default Form;
