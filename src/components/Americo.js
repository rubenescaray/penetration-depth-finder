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
			porosity: '',
			alert: false,
			alert2: false,
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

  toggleAlert2 = () => {
  	this.setState({ alert2: true })
  	setTimeout(() => {
  		this.setState({
  			alert2: false,
  		})
  	},3000)
  }

	calculate = () => {
		let { porosity } = this.state
		if (porosity === '') {
			this.toggleAlert()
			return
		} else if (!isValidNumber(porosity)) {
			this.toggleAlert2()
			return
		}

		this.props.calculateAmerico(porosity);
		this.setState({
			porosity: '',
		})
	}

  render() {
  	let { show } = this.props
  	if (show != 2) {
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
					    <Form.Control onChange={this.handleChange.bind(this)}  name="porosity" placeholder="Porosidad (%)" />
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