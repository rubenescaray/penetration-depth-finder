import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Dropdown } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

class CardenasBlanco extends Component {
	constructor(props) {
		super(props)

		this.state = {
			porosity: 0,
		}
	}

	handleChange(e) {
    this.setState({ 
    	[e.target.name]: Number(e.target.value), 
    });
  };

	calculate = () => {
		let { porosity } = this.state
		this.props.calculateCardenasBlanco(porosity);
	}

  render() {
  	let { show } = this.props;

  	if(show != 3) {
  		return <div></div>;
  	}

    return (
    	<div>
    		<div class="app-form">
	    		<Form>
					  <Form.Group controlId="formBasicEmail">
					    <Form.Control onChange={this.handleChange.bind(this)} name="porosity" placeholder="Porosidad (%)" />
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