import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
    	<div style={{ margin: '50px'}}>
	    	<div class="home-title">
				  <h2>Contacto</h2>
				</div> 
	    	<div class="home-des">
	    		<h4>Para mas información, favor contactar a través de los siguientes medios</h4>
				  <ul style={{marginTop: '35px'}}>
				  	<li><p>José Blanco, jose4ndres@gmail.com</p></li>
				  	<li><p>Luis Cardenas, luiscardenasm4@gmail.com</p></li>
				  </ul>
				</div>
			</div>
    );
  }
}

export default About;