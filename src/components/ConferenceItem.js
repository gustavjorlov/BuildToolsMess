import React from 'react';

export default class ConferenceItem extends React.Component{
	render(){
		console.log("ConferenceItem");
		return (
			<div className="person">
				<div className="ball"></div>
				<h3 className="person_name">{this.props.item.person}</h3>
				<p className="topic">{this.props.item.topic}</p>
				<p className="duration">{this.props.item.duration} min</p>
			</div>);
	}
}