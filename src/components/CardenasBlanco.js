import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Dropdown } from 'react-bootstrap';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

class CardenasBlanco extends Component {
	constructor(props) {
		super(props)

		this.state = {
			porosity: 0,
			holeDiameter: 0,
			alert: false,
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

	calculate = () => {
		let { porosity } = this.state
		if (porosity == '') {
			this.toggleAlert()
			return
		}
		this.props.calculateCardenasBlanco(porosity);
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