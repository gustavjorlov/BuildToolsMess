import React from 'react';
import ReactDOM from 'react-dom';
import Fish from './Fish.js';

export default class FishList extends React.Component{
	render(){
		return (
			<div>
				{this.props.fish.map(type => {
					return (<Fish type={type}/>);
				})}
			</div>
		);
	}
}