import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Dropdown } from 'react-bootstrap';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { isValidNumber } from "../helpers";

class CardenasBlanco extends Component {
	constructor(props) {
		super(props)

		this.state = {
			porosity: '',
			holeDiameter:'',
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
		let { porosity, holeDiameter } = this.state
		if (porosity === '' || holeDiameter === '') {
			this.toggleAlert()
			return
		} else if (!isValidNumber(porosity) || !isValidNumber(holeDiameter)) {
			this.toggleAlert2()
			return
		}
		this.props.calculateCardenasBlanco(porosity, holeDiameter);
		this.setState({
			porosity: '',
			holeDiameter: '',
		})
	}

  render() {
  	let { show } = this.props;

  	if(show != 3) {
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
					    <Form.Control onChange={this.handleChange.bind(this)} name="porosity" placeholder="Porosidad (%)" />
					  </Form.Group>

					  <Form.Group controlId="formBasicEmail">
					    <Form.Control onChange={this.handleChange.bind(this)} name="holeDiameter" placeholder="Diámetro del Hoyo (in)" />
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

export default CardenasBlanco;