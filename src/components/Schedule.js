import React from 'react';
import ConferenceItem from './ConferenceItem.js';

export default class Schedule extends React.Component{
	render(){
		return (
			<div className="scheduleview">
				<h2>Schema</h2>
				<div className="schedule">
					{this.props.presentations.map(presentation => {
						return <ConferenceItem item={presentation} />
					})}
				</div>
				<br/><br/><br/>
			</div>
		);
	}
}