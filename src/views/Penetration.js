import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Dropdown } from 'react-bootstrap';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Penetration extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pensup: 0,
			ressup: 0,
			resfor: 0,
			penetrationResult: 0,
			alert: false,
		}
	}

	handleChange(e) {
    this.setState({ 
    	[e.target.name]: e.target.value 
    }, console.log(this.state));
  };

  toggleAlert = () => {
  	this.setState({ alert: true })
  	setTimeout(() => {
  		this.setState({
  			alert: false,
  		})
  	},3000)
  }

	calculatePenetration = () => {
		let { pensup, ressup, resfor } = this.state;
		if (pensup == '' || ressup == '' || resfor == '') {
			this.toggleAlert()
			return
		}
		let res = ressup - resfor;
		let euler = Math.exp(0.086 * res);
		let result = pensup * euler;
		this.props.getPenetrationResult(result.toFixed(2))
	}

  render() {

    return (
    	<div>
    		<div class="app-title">
				  <h2>Penetracion</h2>
				</div>
				<div class="method-form app-form">
					<Alert show={this.state.alert} dismissable variant={'danger'}>
				    Por favor llenar todos los campos
				  </Alert>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Control onChange={this.handleChange.bind(this)} name="pensup" placeholder="Penetracion en Superficie (in)" />
						</Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Control onChange={this.handleChange.bind(this)} name="ressup"  placeholder="Resistencia Compresiva en Superficie (kpsi)" />
					  </Form.Group>
						  
					  <Form.Group controlId="formBasicPassword">
					    <Form.Control onChange={this.handleChange.bind(this)} name="resfor"  placeholder="Resistencia Compresiva de la Formacion (kpsi)" />
					  </Form.Group>
					</Form>
				  
				  <Button variant="primary" onClick={this.calculatePenetration}>
				  	Continuar
				  </Button>
				</div>
    	</div>
    ) 
  }
}

export default Penetration;