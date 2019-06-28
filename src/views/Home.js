import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
    	<div style={{ margin: '50px'}}>
	    	<div class="home-title">
				  <h2>Inicio</h2>
				</div>
	    	<div class="home-des">
				  <p>
				    <strong>Penetration Depth Finder</strong> es una aplicación computacional que se presenta como una alternativa 
				    para realizar el cálculo de la profundidad de la penetración de los disparos en pozos de hidrocarburos y, 
				    a su vez, para calcular el radio de invasión.<br/> 
				  </p>
				  <p>
						La aplicación brinda la oportunidad al usuario de elegir el método para calcular el radio de invasión de acuerdo a los datos con los que cuente.
						 Posterior a esto, el usuario podrá ingresar los datos necesarios para realizar el cálculo de la penetración. Luego, 
						automáticamente se compararán ambos resultados para determinar si el cañoneo fue efectivo o no.
				  </p>
				</div>
			</div>
    );
  }
}

export default Home;