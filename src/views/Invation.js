import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import Hawkins from '../components/Hawkins';
import Americo from '../components/Americo';
import CardenasBlanco from '../components/CardenasBlanco';
import Direct from '../components/Direct';
import ModernRecords from '../components/ModernRecords';
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

	calculateDirect = (radio) => {
		this.props.getInvationResult(radio)
	}

	calculateCardenasBlanco = (porosity, holeDiameter) => {
		let constant = 176.381238;
		let pow = Math.pow(porosity, -1.408052);
		let result = ((constant * pow) * holeDiameter) / 2;
 		this.props.getInvationResult(result.toFixed(2))
	}

	calculateAmerico = (porosity) => {
		let factor = -0.1144;
		let euler = Math.exp(factor * porosity);
		let result = 215 * euler;
		this.props.getInvationResult(result.toFixed(2))
	}

	calculateModernRecords = (LPRP, LPRPc) => {
		let result = 0;
		let division = LPRPc / LPRP;

		if (division > 1 ) {
			let div = LPRPc / LPRP;
			let pow = div - 1;
			let r = Math.pow(10, pow);
			result = r / 2;
		} else if (division < 1) {
			let div = LPRP / LPRPc;
			let sub = 1 - div;
			let mult = 160 * sub;
			result = mult / 2;
		}
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
  	let ecuacionTitle = '';

  	if (ecuation == 1) {
  		showEcuation = 1;
  		ecuacionTitle = "Ecuación de Hawkins"
  	}else if (ecuation == 2) {
  		showEcuation = 2;
  		ecuacionTitle = "Ecuación de Américo Perozo"
  	} else if (ecuation == 3) {
  		showEcuation = 3;
  		ecuacionTitle = "Ecuación por Porosidad (Cardenas-Blanco)"
  	} else if (ecuation == 4) {
  		showEcuation = 4;
  		ecuacionTitle = "Método Directo"
  	} else if (ecuation == 5) {
  		showEcuation = 5;
  	} 
 
    return (
    	<div>
    		<div class="app-title">
				  <h2>Radio de Invasión</h2>
				</div>
				<div class="app-form">
					<div style={{ display: 'flex' }}>
						<Dropdown>
						  <Dropdown.Toggle variant="primary" id="dropdown-basic">
						    Técnica
						  </Dropdown.Toggle>

						  <Dropdown.Menu>
						  	<Dropdown.Item eventKey={4} onSelect={this.selectItem}>Método Directo</Dropdown.Item>
						    <Dropdown.Item eventKey={1} onSelect={this.selectItem}>Ecuación de Hawkins</Dropdown.Item>
						    <Dropdown.Item eventKey={2} onSelect={this.selectItem}>Ecuación de Américo Perozo</Dropdown.Item>
						    <Dropdown.Item eventKey={3} onSelect={this.selectItem}>Ecuación por Porosidad (Cardenas-Blanco)</Dropdown.Item>
						  </Dropdown.Menu>
						</Dropdown>
						<h3 style={{ marginLeft: '15px' }}>{ecuacionTitle}</h3>
					</div>
					<Direct calculateDirect={this.calculateDirect} show={showEcuation} />
					<Hawkins calculateHawkins={this.calculateHawkins}  show={showEcuation} />
					<Americo calculateAmerico={this.calculateAmerico} show={showEcuation} />
					<CardenasBlanco calculateCardenasBlanco={this.calculateCardenasBlanco} show={showEcuation} />
					<ModernRecords calculateModernRecords={this.calculateModernRecords} show={showEcuation} />
				</div>
    	</div>
    ) 
  }
}

export default Invation;