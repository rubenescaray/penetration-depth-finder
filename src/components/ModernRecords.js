import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Dropdown } from 'react-bootstrap';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

class ModernRecords extends Component {
	constructor(props) {
		super(props)

		this.state = {
			lprp: 0,
			lprpc: 0,
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
  	}, 3000)
  }

	calculate = () => {
		let { lprp, lprpc } = this.state;
		if (lprpc == '' || lprp == '') {
			this.toggleAlert()
			return
		}
		this.props.calculateModernRecords(lprp, lprpc);
	}

  render() {
  	let { show } = this.props;

  	if(show != 5) {
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
					    <Form.Control 
					    	onChange={this.handleChange.bind(this)} 
					    	name="lprp" 
					    	placeholder="Lectura del Perfil de Resistividad Profunda (ohm-m)" />
					  </Form.Group>

					  <Form.Group controlId="formBasicEmail">
					    <Form.Control 
					    	onChange={this.handleChange.bind(this)} 
					    	name="lprpc" 
					    	placeholder="Lectura del Perfil de Resistividad Profunda Corregida (ohm-m)" />
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

export default ModernRecords;