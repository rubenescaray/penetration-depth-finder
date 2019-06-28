import React, { Component } from 'react';
import SubHeader from '../components/SubHeader';
import { Table } from 'react-bootstrap';

class Results extends Component {
	constructor(props){
		super(props)

		this.state = {
			satisfactory: false,
		}
	}

	componentDidMount(){
		console.log(this.props)
		let { invationResult, penetrationResult, generalData } = this.props.results
		this.compareResults(invationResult, penetrationResult)
	}


	compareResults(invation, penetration){
		let invation_plus = Number(invation) + 6;
		if(invation_plus < penetration) {
			return this.setState({
				satisfactory: true,
			})
		}
	}

  render() {
  	let { invationResult, generalData, penetrationResult } = this.props.results
  	let { satisfactory } = this.state

    return (
    	<div>
    		<div class="app-title">
				  <h2>Resultados</h2>
				</div>
				<div class="app-form">
					<Table striped bordered hover>
				  <thead>
				    <tr>
				    	<th>Compañia</th>
				    	<th>Ingeniero</th>
				      <th>Pozo</th>
				      <th>Campo</th>
				      <th>Radio Invasion (in)</th>
				      <th>Radio de Invasion + 6 in (in)</th>
				      <th>Penetracion del Disparo (in)</th>
				      <th>Se sobrepaso la zona invadida de manera satisfactoria o desfavorable</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td>{generalData.company}</td>
				      <td>{generalData.engineer}</td>
				      <td>{generalData.well}</td>
				      <td>{generalData.field}</td>
				      <td>{invationResult}</td>
				      <td>{Number(invationResult) + 6}</td>
				      <td>{penetrationResult}</td>
				      <td>{satisfactory ? 'Satisfactorio' : 'No fue satisfactorio'}</td>
				    </tr>
				  </tbody>
				</Table>
				</div>
    	</div>
    ) 
  }
}

export default Results;