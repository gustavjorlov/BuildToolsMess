import React from 'react';

export default class GeneralInformation extends React.Component{
	render(){
		console.log("GeneralInformation");
		return (
			<div className="generalinformation">
				<h2>Information</h2>
				<div className="info">
					<p>Samordna eventuell samåkning på Slack</p>
					<p>Incheckat bagage får väga 20 kg (ni som tar med skidfodral får ha två kollin men fortfarande sammanlagd vikt 20 kg, skidfodral är enda tillåtna extra-kollit). Handbagage får väga 8 kg.</p>
					<p>Packa med badkläder och varma kläder samt donglar till projektor (vi kan inte ha med för många)</p>
					<p>Lycklig vinnare av singelrummet är den som postar bästa/roligaste motiveringen till det på Slack</p>
					<p>Ni som ska hyra skidor löser detta på egen hand. Liftkort står KITS för. Ni som har Åre Skistar-chipkort meddelar kortnummer till Gustav innan torsdag lunch</p>
					<p>Skoteråkare tar med B-körkort samt är nyktra och har lite varma kläder på sig.</p>
					<p>Nu kör vi!!!</p>
				</div>

			</div>);
	}
}
