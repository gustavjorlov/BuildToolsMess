import React from 'react';
import Day from './Day.js';

export default class Schedule extends React.Component{

	renderDay(day){
		console.log("day", day);
		return (
			<div className="scheduleview">
				<Day name={day.day} schedule={day.schedule} />
			</div>
		);
	}

	render(){
		return (
			<div>
				{this.props.schedule.map(this.renderDay)}
			</div>
		);
	}
}
