import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class MeasurementView extends Component {

	constructor(props){
		super(props);
		//could be this.props.match...
		if (this.props.match.params != null){
			this.measurement = this.props.match.params.measureName;	
		}
		
		//This is how you refer to function clients passed through frmo the App.js

		/*this.search = this.props.client.api.search;
		this.search({type: "Observation", query: {subject: "99912345"}})
      			.then(function(r){ 
        			console.log("alsjdhfalsdkfjhalsdfjhasldfkjasldfajshd ",JSON.stringify(r,null,2));
	    		});
		*/
	}

	render(){
		return (
			<div>
				<h1>{this.measurement}</h1>
			</div>
		)
	}

}

export default MeasurementView;