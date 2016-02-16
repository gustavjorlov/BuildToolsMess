import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application.js';

var presentations = [
	{
		"person": "Sture",
		"topic": "CAN bus reverse engineering",
		"description": "",
		"duration": 30
	},
	{
		"person": "Olof",
		"topic": "Automatgenerera dina tester i Spring",
		"description": "",
		"duration": 45
	},
	{
		"person": "Pierre",
		"topic": "Bygga en app med Apple Watch Kit",
		"description": "",
		"duration": 45
	},
	{
		"person": "Pierre",
		"topic": "Foto -> CSS",
		"description": "",
		"duration": 15
	},
	{
		"person": "Joakim K",
		"topic": "Is JavaScript getting any better?",
		"description": "",
		"duration": 40
	},
	{
		"person": "Mikael W",
		"topic": "Input, output, kaput – Java Deserlization och Du",
		"description": "",
		"duration": 25
	},
	{
		"person": "Tobias",
		"topic": "Jag kan inte mina lösenord¤!?#",
		"description": "",
		"duration": 15
	},
	{
		"person": "Johan H",
		"topic": "KITS?",
		"description": "",
		"duration": 60
	},
	{
		"person": "Oscar",
		"topic": "Erfarenheter från ett småskaligt angular-projekt med Firebase som backend",
		"description": "",
		"duration": 15
	},
	{
		"person": "Patrik",
		"topic": "Web workers",
		"description": "",
		"duration": 15
	},
	{
		"person": "Gustav",
		"topic": "The need for a JavaScript build tool",
		"description": "",
		"duration": 30
	}
];

ReactDOM.render(
	<Application presentations={presentations} />,
	document.getElementById('main')
);