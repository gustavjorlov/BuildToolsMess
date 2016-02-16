import React from 'react';
import ReactDOM from 'react-dom';

export default class Fish extends React.Component{
	render(){
		return (
			<div>
				<h2>{this.props.type}</h2>
			</div>
		);
	}
}