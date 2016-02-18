import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application.js';

var fridaySchedule = [
	{
		"title": "Avresa från Landvetter",
		"topic": "Mellanlanda i Bromma, slutmål Östersund",
		"time": "7:00",
		"presentation": false
	},
	{
		"title": "Landar i Östersund",
		"topic": "...och påbörja transfer till Åre",
		"time": "9:20",
		"presentation": false
	},
	{
		"title": "Lunch på hotellet",
		"topic": "Ät ordentligt, en lång dag väntar",
		"time": "~12:30",
		"presentation": false
	},
	{
		"title": "Sture",
		"topic": "CAN bus reverse engineering",
		"description": "",
		"duration": 30,
		"time": "14:00",
		"presentation": true
	},
	{
		"title": "Olof",
		"topic": "Automatgenerera dina tester i Spring",
		"description": "",
		"duration": 45,
		"time": "14:30",
		"presentation": true
	},
	{
		"title": "Pierre",
		"topic": "Bygga en app med Apple Watch Kit",
		"description": "",
		"duration": 45,
		"time": "15:15",
		"presentation": true
	},
	{
		"title": "Pierre",
		"topic": "Foto -> CSS",
		"description": "",
		"duration": 15,
		"time": "16:00",
		"presentation": true
	},
	{
		"title": "Fika",
		"topic": "Kaffe och bulle",
		"description": "",
		"duration": 15,
		"time": "16:15",
		"presentation": true
	},
	{
		"title": "Joakim K",
		"topic": "Is JavaScript getting any better?",
		"description": "",
		"duration": 40,
		"time": "16:30",
		"presentation": true
	},
	{
		"title": "Mikael W",
		"topic": "Input, output, kaput – Java Deserlization och Du",
		"description": "",
		"duration": 25,
		"time": "17:10",
		"presentation": true
	},
	{
		"title": "Tobias",
		"topic": "Jag kan inte mina lösenord¤!?#",
		"description": "",
		"duration": 15,
		"time": "17:35",
		"presentation": true
	},
	{
		"title": "Johan H",
		"topic": "KITS?",
		"description": "",
		"duration": 60,
		"time": "17:50",
		"presentation": true
	},
	{
		"title": "Oscar",
		"topic": "Erfarenheter från ett småskaligt angular-projekt med Firebase som backend",
		"description": "",
		"duration": 15,
		"time": "18:50",
		"presentation": true
	},
	{
		"title": "Patrik",
		"topic": "Web workers",
		"description": "",
		"duration": 15,
		"time": "19:05",
		"presentation": true
	},
	{
		"title": "Gustav",
		"topic": "The need for a JavaScript build tool",
		"description": "",
		"duration": 30,
		"time": "19:20",
		"presentation": true
	},
	{
		"title": "Middag",
		"topic": "På hotellet",
		"time": "20:00",
		"presentation": false
	}
];

var saturdaySchedule = [
	{
		"title": "Vakna",
		"topic": "Pigg som en lärka",
		"time": "7:00",
		"presentation": false
	},
	{
		"title": "Hopp och lek",
		"topic": "Åka skidor, köra skoter eller surfa internet",
		"time": "9:00",
		"presentation": false
	},
	{
		"title": "After Ski / Shop och stek",
		"time": "17:30",
		"presentation": false
	},
	{
		"title": "Middag",
		"topic": "Vinbaren mitt i Åre",
		"time": "21:00",
		"presentation": false
	}
];

var sundaySchedule = [
	{
		"title": "Vakna",
		"topic": "Piggare än en lärka",
		"time": "7:00",
		"presentation": false
	},
	{
		"title": "Busstransfer Åre Holiday Club - Önstersund",
		"topic": "Sova den sista blunden",
		"time": "9:00",
		"presentation": false
	},
	{
		"title": "Åka hem",
		"time": "11:00",
		"presentation": false
	}
];

var schedule = [
	{
		"day": "Fredag",
		"schedule": fridaySchedule
	},
	{
		"day": "Lördag",
		"schedule": saturdaySchedule
	},
	{
		"day": "Söndag",
		"schedule": sundaySchedule
	}
];

ReactDOM.render(
	<Application schedule={schedule} />,
	document.getElementById('main')
);