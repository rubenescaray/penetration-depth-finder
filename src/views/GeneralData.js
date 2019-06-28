import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class GeneralData extends Component {
	constructor(props) {
		super(props)

		this.state = {
			company: '',
			engineer: '',
			well: '',
			field: '',
		}
	}

	handleChange(e) {
    this.setState({ 
    	[e.target.name]: e.target.value 
    });
  }

  submitGeneralData = () => {
  	let { company, engineer, well, field } = this.state
  	this.props.getGeneralData(company, engineer, well, field)
  }

  render() {
  	
    return (
    	<div>
    		<div class="app-title">
				  <h2>Datos Generales</h2>
				</div>
				<div class="app-form">
					<Form>
					  <Form.Group controlId="formBasicEmail">
					    <Form.Control onChange={this.handleChange.bind(this)} name="company" placeholder="Compañia" />
					  </Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Control onChange={this.handleChange.bind(this)} name="engineer"  placeholder="Ingeniero" />
					  </Form.Group>
					  
					  <Form.Group controlId="formBasicPassword">
					    <Form.Control onChange={this.handleChange.bind(this)} name="well"  placeholder="Pozo" />
					  </Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Control onChange={this.handleChange.bind(this)} name="field"  placeholder="Campo" />
					  </Form.Group>

					  <Button variant="primary" onClick={this.submitGeneralData}>
					  	Continuar
					  </Button>
					</Form>
				</div>
    	</div>
    ) 
  }
}

export default GeneralData;