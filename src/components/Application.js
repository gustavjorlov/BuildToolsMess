import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Schedule from './Schedule.js';
import GeneralInformation from './GeneralInformation.js';
import Map from './Map.js';

export default class Application extends React.Component{

	render(){
		return (
			<div className="application">
				<Header />
				<GeneralInformation />
				<Schedule schedule={this.props.schedule} />
				<Map markers={this.props.mapMarkers} />
				<Footer />
			</div>
		);
	}
}
