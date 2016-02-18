import React from 'react';

export default class ConferenceItem extends React.Component{
	render(){
		console.log("ConferenceItem");
		return (
			<div className={"person" + (this.props.item.presentation ? ' presentation' : '')}>
				<div className="ball"></div>
				<p className="duration">{this.props.item.time}</p>
				<h3 className="title">{this.props.item.title}</h3>
				<p className="topic">{this.props.item.topic}</p>
			</div>);
	}
}