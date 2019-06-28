import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Dropdown } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Penetration extends Component {
	constructor(props) {
		super(props)

		this.state = {
			pensup: 0,
			ressup: 0,
			resfor: 0,
			penetrationResult: 0,
		}
	}

	

	handleChange(e) {
    this.setState({ 
    	[e.target.name]: e.target.value 
    }, console.log(this.state));
  };

	calculatePenetration = () => {
		let { pensup, ressup, resfor } = this.state;
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
				<Form class="app-form">
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
    ) 
  }
}

export default Penetration;