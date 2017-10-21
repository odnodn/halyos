import React, { Component } from 'react';
import $ from 'jquery'; 
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Pollen1 from './logos/pollen/Pollen1.js';
import Pollen2 from './logos/pollen/Pollen2.js';
import Pollen3 from './logos/pollen/Pollen3.js';
//const PollenSVG = require('../../logos/pollen.svg');

import { fetchPollenLevels } from './EnvActions';
// import { connect } from 'react-redux';

const categories = {
//(low, high, good, moderate, , )
	1:"Low",
	2:"High",
	3:"Good",
	4:"Moderate",
	5:"Unhealthy",
	6:"Hazardous"
}

class PollenLevel extends Component {
	constructor(props) {
		super(props);
		// this.state = {data: null};
		// const { store } = this.context;

	}

  componentWillMount() {
  	

  		// this.props.getPollenLevels("60564");
		// this.store.dispatch(fetchPollenLevels(this.props.location.zip_code))
		// 	 .then(() => console.log("we got all the data???? for pollen" , this.store.getState()));


		// this.unsubscribe = this.store.subscribe(this.render)
			
//     if ((this.state.data === null)){
// 			$.getJSON('http://dataservice.accuweather.com/forecasts/v1/daily/1day/' + this.props.location.zip_code + '?apikey=Dkvl9QArEY7A7Kzofew70OEHTNDYBjEA&details=true', function(data) {


  }

  componentDidMount(){
	 console.log("mounted: ",this.props.dispatch);
	 this.props.getPollenLevels("60564");
  }

  componentWillUnmount(){
  }
  
  componentWillReceiveProps(nextProps) {

	// 		if ((this.state.data === null) && nextProps.location && !this.props.location){
	// 			$.getJSON('http://dataservice.accuweather.com/forecasts/v1/daily/1day/' + nextProps.location.zip_code + '?apikey=Dkvl9QArEY7A7Kzofew70OEHTNDYBjEA&details=true', function(data) {
	// 					  this.setState({data:data});
	// 					}.bind(this));

	// 		}
		
  }

	render() {
		
		console.log("this props; ------ ", this.props.pollen);
		if (this.props.isFetchingPollenData || !this.props.pollen){
			return (
				<div>Loading...</div>
			)	
		}

		// console.log("REdux store:", this.props)

		var allergyMeasures = this.props.pollen.DailyForecasts[0].AirAndPollen.filter(function(item){
			return (item.Name !== "UVIndex" && item.Name !== "AirQuality");
		});

		var counter = 0;
		var avgLevel;
		allergyMeasures.map(function(item) {
			counter += item.CategoryValue;
		});

		avgLevel = Math.round(counter/Object.keys(allergyMeasures).length);

		const listItems = allergyMeasures.map((item) => 
			<tr>
				<td>{item.Name}</td>
				<td>{item.Category}</td>
			</tr>
		);

		const tableStyle = {

			align: "center",
			textAlign:"left"
		}


		const tooltip = (
		  <Tooltip id="tooltip">
			<h5>Pollen Levels</h5>
			<table style={tableStyle}>
				<thead>
					<tr>
					    <th>Type</th>
					    <th>Level</th> 
					 </tr>
				 </thead>
				 <tbody>
				 {listItems}
				</tbody>
			</table>
		  </Tooltip>
		);

		var pollenIcon;
		if(avgLevel >= 1 && avgLevel <= 2) {
			pollenIcon = <Pollen1 placement="top" tooltip={tooltip} level={avgLevel}/>
		}
		else if (avgLevel >=3 && avgLevel <= 4){
			pollenIcon = <Pollen2 placement="top" tooltip={tooltip} level={avgLevel}/>
		} else {
			pollenIcon = <Pollen3 placement="top" tooltip={tooltip} level={avgLevel}/>
		}
		return (	
			pollenIcon
		);

		
	}
}

export default PollenLevel;