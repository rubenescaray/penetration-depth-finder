import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Dropdown } from 'react-bootstrap';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Direct extends Component {
	constructor(props) {
		super(props)

		this.state = {
			radio: 0,
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
		let { radio } = this.state
		if (radio == '') {
			this.toggleAlert()
			return
		}
		this.props.calculateDirect(radio);
	}

  render() {
  	let { show } = this.props;

  	if(show != 4) {
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
					    <Form.Control onChange={this.handleChange.bind(this)} name="radio" placeholder="Radio de Invasión (in)" />
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

export default Direct;