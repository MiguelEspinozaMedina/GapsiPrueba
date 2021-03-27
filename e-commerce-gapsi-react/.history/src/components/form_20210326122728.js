import React, { Component } from 'react';

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
                <p>We will answer as soon as possible</p>
                <input type="submit" name="submit" value="Send" onClick= {this.submitForm} />

              </div>
              
            </form>
    );
  }
}

export default Form;
