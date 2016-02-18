import React from 'react';

export default class Header extends React.Component{
	render(){
		console.log("Header");
		return (<div id="header">
			<img src="images/mountain.png" />
			<h1>KitsCon 16.1<br/>Snow Edition</h1>
			<h3 className="tagline">Kompetensutveckling, snö i nacken 
och kanske några ÖL™ i frisk fjällmiljö</h3>
		</div>);
	}
}