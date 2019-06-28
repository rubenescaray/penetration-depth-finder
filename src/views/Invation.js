import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import Hawkins from '../components/Hawkins';
import Americo from '../components/Americo';
import CardenasBlanco from '../components/CardenasBlanco';
import { Dropdown } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Invation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			ecuation: 0,
			invationResult: 0,
			generalData: {},
		}
	}

	calculateHawkins = (wellRadio, permeability, damage) => {
		let e_divisor = (permeability) - 1;
		let e_numerator = damage;
		let euler = Math.exp(e_numerator / e_divisor);
		let result = wellRadio * euler;
		this.props.getInvationResult(result.toFixed(2))
	}

	calculateCardenasBlanco = (porosity) => {
		let constant = 176.381238;
		let pow = Math.pow(porosity, -1.408052)
		let result = constant * pow
		this.props.getInvationResult(result.toFixed(2))
	}

	selectItem = (key, event) => {
		this.setState({
			ecuation: key,
		})
	}

  render() {
  	let { ecuation } = this.state;
  	let showEcuation;

  	if (ecuation == 1) {
  		showEcuation = 1;
  	}else if (ecuation == 2) {
  		showEcuation = 2;
  	} else if (ecuation == 3) {
  		showEcuation = 3;
  	}

    return (
    	<div>
    		<div class="app-title">
				  <h2>Radio de Invasion</h2>
				</div>
				<div class="app-form">
					<Dropdown>
					  <Dropdown.Toggle variant="primary" id="dropdown-basic">
					    Metodo
					  </Dropdown.Toggle>

					  <Dropdown.Menu>
					    <Dropdown.Item eventKey={1} onSelect={this.selectItem}>Ecuacion de Hawkins</Dropdown.Item>
					    <Dropdown.Item eventKey={2} onSelect={this.selectItem}>Ecuacion de Americo</Dropdown.Item>
					    <Dropdown.Item eventKey={3} onSelect={this.selectItem}>Ecuacion Cardenas-Blanco</Dropdown.Item>
					  </Dropdown.Menu>
					</Dropdown>
					<Hawkins calculateHawkins={this.calculateHawkins}  show={showEcuation} />
					<Americo show={showEcuation} />
					<CardenasBlanco calculateCardenasBlanco={this.calculateCardenasBlanco} show={showEcuation} />
				</div>
    	</div>
    ) 
  }
}

export default Invation;