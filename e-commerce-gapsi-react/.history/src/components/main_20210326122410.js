import React, { Component } from 'react';
import Form from "./form";

class Main extends Component {
  render() {
    return (
      <main>
        

        <section>
            <h2>Bienvenido Candidato Miguel An</h2>
            <div>
              <p>Integer sit amet venenatis erat. Cras elementum tortor odio, sit amet euismod nunc cursus ut. Donec sollicitudin orci sed enim volutpat, volutpat rutrum magna semper. Fusce leo lacus, pulvinar sit amet dignissim in, consectetur eget nulla. Etiam ac turpis augue. Sed tincidunt pulvinar tincidunt. Integer ac blandit magna. Nulla dapibus convallis luctus. </p>
              <p>Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis sem fringilla, tincidunt nisi non, congue libero. Etiam cursus nulla quis sapien varius, eget accumsan augue mattis. Cras accumsan sapien nulla, eu eleifend odio tempus sit amet. Suspendisse gravida hendrerit sapien, ut molestie mi pellentesque eget. Aliquam eleifend velit vel libero elementum, vitae consectetur nisl sollicitudin. Suspendisse volutpat fringilla vehicula.</p>
              </div>
        </section>


        <section>
            <Form />
          
        </section>

       
      </main>
    );
  }
}

export default Main;
