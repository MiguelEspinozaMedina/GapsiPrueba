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
          {/* I am just sending a basic error message */}
              {this.state.formError &&
                <p className="error">
                    Fill all the input fields please.
                </p>
              }
              <p>Fill in the next form to send us a message</p>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Your name here please" onChange={this.getName} />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="We will contact you after reviewing your message" onChange={this.getEmail} />
              </div>
              <div>
                <label htmlFor="name">Message</label>
                <textarea onChange={this.getDescription} maxLength="450"></textarea>

              </div>
              <div>
                <p>We will answer as soon as possible</p>
                <input type="submit" name="submit" value="Send" onClick= {this.submitForm} />

              </div>
              
            </form>
    );
  }
}

export default Form;
