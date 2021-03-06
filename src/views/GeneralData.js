import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Form, Button, Alert  } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class GeneralData extends Component {
	constructor(props) {
		super(props)

		this.state = {
			company: '',
			engineer: '',
			well: '',
			field: '',
			alert: false,
		}
	}

	handleChange(e) {
    this.setState({ 
    	[e.target.name]: e.target.value 
    });
  }

  toggleAlert = () => {
  	this.setState({ alert: true })
  	setTimeout(() => {
  		this.setState({
  			alert: false,
  		})
  	},3000)
  }

  submitGeneralData = () => {
  	let { company, engineer, well, field } = this.state
  	if (company == '' || engineer == '' || well == '' || field == '') {
			this.toggleAlert()
			return
		}
  	this.props.getGeneralData(company, engineer, well, field)
  }

  render() {
  	
    return (
    	<div>
    		<div class="app-title">
				  <h2>Datos Generales</h2>
				</div>
				<div class="app-form">
					<Alert show={this.state.alert} dismissable variant={'danger'}>
				    Por favor llenar todos los campos
				  </Alert>
					<Form>
					  <Form.Group controlId="formBasicEmail">
					    <Form.Control onChange={this.handleChange.bind(this)} name="company" placeholder="Compañía" />
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