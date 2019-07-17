import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Dropdown } from 'react-bootstrap';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { isValidNumber } from "../helpers";

class Hawkins extends Component {
	constructor(props) {
		super(props)

		this.state = {
			wellRadio: 0,
			permeability: 0,
			damage: 0,
			alert: false,
			alert2: false,
		}
	}

	handleChange(e) {
    this.setState({ 
    	[e.target.name]: Number(e.target.value), 
    });
  };

  toggleAlert = () => {
  	this.setState({ alert: true })
  	setTimeout(() => {
  		this.setState({
  			alert: false,
  		})
  	},3000)
  }

  toggleAlert2 = () => {
  	this.setState({ alert2: true })
  	setTimeout(() => {
  		this.setState({
  			alert2: false,
  		})
  	},3000)
  }

	calculate = () => {
		let { wellRadio, permeability, damage } = this.state
		if (wellRadio === '' || permeability === '' || damage === '') {
			this.toggleAlert()
			return
		} else if (!isValidNumber(wellRadio) || !isValidNumber(permeability)) {
			this.toggleAlert2()
			return
		}
		this.props.calculateHawkins(wellRadio, permeability, damage);
		this.setState({
			wellRadio: '',
			permeability: '',
			damage: '',
		})
	}

  render() {
  	let { show } = this.props;

  	if(show != 1) {
  		return <div></div>;
  	}


    return (
    	<div>
    		<div class="method-form">
    			<Alert show={this.state.alert} dismissable variant={'danger'}>
				    Por favor llenar todos los campos
				  </Alert>
				  <Alert show={this.state.alert2} dismissable variant={'danger'}>
				    Por favor, no utilizar valores negativos o iguales a 0
				  </Alert>
	    		<Form>
					  <Form.Group controlId="formBasicEmail">
					    <Form.Control onChange={this.handleChange.bind(this)} name="wellRadio" placeholder="Radio del Pozo (in)" />
					  </Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Control 
					    	onChange={this.handleChange.bind(this)} 
					    	name="permeability"
					    	placeholder="Reducción de Permeabilidad por efectos de Invasión (k/ks)" />
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