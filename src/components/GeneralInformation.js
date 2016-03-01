import React from 'react';

export default class GeneralInformation extends React.Component{
	render(){
		console.log("GeneralInformation");
		return (
			<div className="generalinformation">
				<h2>Information</h2>
				<div className="info">
					<p>...mer info på gång.</p>
				</div>

			</div>);
	}
}
