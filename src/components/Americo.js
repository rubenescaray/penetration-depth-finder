import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Dropdown } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Hawkins extends Component {
	constructor(props) {
		super(props)
		this.state = {
			porosity: 0,
		}
	}

	handleChange(e) {
    this.setState({ 
    	[e.target.name]: e.target.value 
    }, console.log(this.state));
  };

	calculateAmerico() {
		let { porosity } = this.state
		let factor = -0.1144;
		let euler = Math.exp(factor * porosity);
		let result = 215 * euler;
		alert(result.toFixed(2));
	}

  render() {
  	let { show } = this.props
  	if(show != 2) {
  		return <div></div>;
  	}

    return (
    	<div>
    		<div class="method-form">
	    		<Form>
					  <Form.Group controlId="formBasicEmail">
					    <Form.Control onChange={this.handleChange.bind(this)}  name="porosity" placeholder="Porosidad (%)" />
					  </Form.Group>

					  <Button variant="primary" type="submit">
					    Continuar
					  </Button>
					</Form>
				</div>
    	</div>
    ) 
  }
}

export default Hawkins;