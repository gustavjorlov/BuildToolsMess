import React from 'react';
import ConferenceItem from './ConferenceItem.js';

export default class Day extends React.Component{
	render(){
		console.log(this.props.name, this.props.schedule);
		return (
			<div>
				<h2>{this.props.name}</h2>
				<div className="schedule">
					{this.props.schedule.map(presentation => {
						return <ConferenceItem item={presentation} />;
					})}
				</div>
				<br/><br/><br/>
			</div>
		);
	}
}