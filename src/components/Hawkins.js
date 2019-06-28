import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Dropdown } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Hawkins extends Component {
	constructor(props) {
		super(props)

		this.state = {
			wellRadio: 0,
			permeability: 0,
			damage: 0,
		}
	}

	handleChange(e) {
    this.setState({ 
    	[e.target.name]: Number(e.target.value), 
    });
  };

	calculate = () => {
		let { wellRadio, permeability, damage } = this.state
		this.props.calculateHawkins(wellRadio, permeability, damage);
	}

  render() {
  	let { show } = this.props;

  	if(show != 1) {
  		return <div></div>;
  	}


    return (
    	<div>
    		<h1>Metodo Hawkins</h1>
    		<div class="app-form">
	    		<Form>
					  <Form.Group controlId="formBasicEmail">
					    <Form.Control onChange={this.handleChange.bind(this)} name="wellRadio" placeholder="Radio del Pozo (in)" />
					  </Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Control 
					    	onChange={this.handleChange.bind(this)} 
					    	name="permeability"
					    	placeholder="Reduccion de Permeabilidad por efectos de Invasion (k/ks)" />
					  </Form.Group>
					  
					  <Form.Group controlId="formBasicPassword">
					    <Form.Control onChange={this.handleChange.bind(this)} name="damage"  placeholder="Daño (S)" />
					  </Form.Group>

					  <Button variant="primary" onClick={this.calculate}>
					  	Continuar
				  	</Button>
					</Form>
				</div>
    	</div>
    ) 
  }
}

export default Hawkins;