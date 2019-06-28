import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SubHeader from '../components/SubHeader';
import GeneralData from './GeneralData';
import Invation from './Invation';
import Penetration from './Penetration';
import Results from './Results';

class Aplication extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeTab: 0,
			generalData: {},
			invationResult: 0,
			penetrationResult: 0,
		}
	}

	changeTab = (index) => {
		this.setState({
			activeTab: index,
		})
	}

	componentDidUpdate() {
		console.log(this.state)
	}

	getGeneralData = (company, engineer, well, field) => {
		let data = {
			company,
			engineer,
			well,
			field,
		}
		this.setState({
			generalData: data,
		}, this.changeTab(1))
	}

	getInvationResult = (result) => {
		this.setState({
			invationResult: result,
		}, this.changeTab(2))
	}

	getPenetrationResult = (result) => {
		this.setState({
			penetrationResult: result,
		}, this.changeTab(3))
	}

  render() {
  	let { activeTab, generalData, invationResult, penetrationResult } = this.state
  	
  	let results = {
  		generalData,
  		invationResult,
  		penetrationResult,
  	} 

  	let activeComponent

  	if (activeTab == 0) {
  		activeComponent = <GeneralData getGeneralData={this.getGeneralData} />
  	} else if (activeTab == 1) {
  		activeComponent = <Invation getInvationResult={this.getInvationResult} />
  	} else if (activeTab == 2) {
  		activeComponent = <Penetration getPenetrationResult={this.getPenetrationResult} />
  	} else if (activeTab == 3) {
  		activeComponent = <Results results={results} />
  	}

    return(
    	<div style={{ margin: '50px'}}>
				<div style={{ marginTop: '30px' }}>
					{activeComponent}
				</div> 
    	</div>
    );
  }
}

export default Aplication;