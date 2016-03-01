import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application.js';

var fridaySchedule = [
	{
		"id": "1",
		"title": "Flyget lyfter",
		"topic": "Landvetter - Bromma - Östersund",
		"time": "7:00",
		"presentation": false
	},
	{
		"id": "2",
		"title": "Landar i Östersund",
		"topic": "...och påbörja transfer till Åre",
		"time": "9:20",
		"presentation": false
	},
	{
		"id": "3",
		"title": "Lunch på hotellet",
		"topic": "Ät ordentligt, en lång dag väntar",
		"time": "12:30",
		"presentation": false
	},
	{
		"id": "4",
		"title": "Patrik",
		"topic": "Välkommen!",
		"description": "",
		"duration": 10,
		"time": "13:50",
		"presentation": true,
		"image": "patriknilsson-mini.png"
	},
	{
		"id": "5",
		"title": "Sture",
		"topic": "CAN bus reverse engineering",
		"description": "",
		"duration": 30,
		"time": "14:00",
		"presentation": true,
		"image": "secret.png"
	},
	{
		"id": "6",
		"title": "Olof",
		"topic": "Automatgenerera dina tester i Spring",
		"description": "",
		"duration": 45,
		"time": "14:30",
		"presentation": true,
		"image": "olofgunnarsson-mini.png"
	},
	{
		"id": "7",
		"title": "Pierre",
		"topic": "Bygga en app med Apple Watch Kit",
		"description": "",
		"duration": 45,
		"time": "15:15",
		"presentation": true,
		"image": "secret.png"
	},
	{
		"id": "8",
		"title": "Fika",
		"topic": "Kaffe och bulle",
		"description": "",
		"duration": 15,
		"time": "16:00",
		"presentation": false
	},
	{
		"id": "9",
		"title": "Joakim K",
		"topic": "Catching up with JavaScript",
		"description": "",
		"duration": 40,
		"time": "16:15",
		"presentation": true,
		"image": "joakimkemeny-mini.png"
	},
	{
		"id": "10",
		"title": "Gustav",
		"topic": "The need for a JavaScript build tool",
		"description": "",
		"duration": 30,
		"time": "16:55",
		"presentation": true,
		"image": "gustavjorlov-mini.png"
	},
	{
		"id": "11",
		"title": "Mikael W",
		"topic": "Input, output, kaput – Java Deserlization och Du",
		"description": "",
		"duration": 25,
		"time": "17:25",
		"presentation": true,
		"image": "secret.png"
	},
	{
		"id": "12",
		"title": "Tobias",
		"topic": "Jag kan inte mina lösenord¤!?#",
		"description": "",
		"duration": 15,
		"time": "17:50",
		"presentation": true,
		"image": "tobiaslans-mini.png"
	},
	{
		"id": "13",
		"title": "Oscar",
		"topic": "Erfarenheter från ett småskaligt angular-projekt med Firebase som backend",
		"description": "",
		"duration": 15,
		"time": "18:05",
		"presentation": true,
		"image": "secret.png"
	},
	{
		"id": "14",
		"title": "Patrik",
		"topic": "Web workers",
		"description": "",
		"duration": 15,
		"time": "18:20",
		"presentation": true,
		"image": "patriknilsson-mini.png"
	},
	{
		"id": "15",
		"title": "Pierre",
		"topic": "Foto -> CSS",
		"description": "",
		"duration": 15,
		"time": "18:35",
		"presentation": true,
		"image": "secret.png"
	},
	{
		"id": "16",
		"title": "Middag",
		"topic": "På hotellet",
		"time": "20:00",
		"presentation": false
	}
];

var saturdaySchedule = [
	{
		"id": "17",
		"title": "Vakna",
		"topic": "Pigg som en lärka",
		"time": "7:00",
		"presentation": false
	},
	{
		"id": "18",
		"title": "Johan och Patrik",
		"topic": "KITS? Frukostseminarie kring vår identitet",
		"time": "7:00",
		"duration": 60,
		"time": "8:00",
		"presentation": true,
		"image": "secret.png"
	},
	{
		"id": "19",
		"title": "Hopp och lek",
		"topic": "Åka skidor, bada bastu eller surfa internet",
		"time": "9:00",
		"presentation": false
	},
	{
		"id": "20",
		"title": "Aktivitet",
		"topic": "Skoter på renfjället",
		"time": "13:00",
		"presentation": false
	},
	{
		"id": "21",
		"title": "After Ski",
		"topic": "Samling i hotellets lobby",
		"time": "17:30",
		"presentation": false
	},
	{
		"id": "22",
		"title": "Middag",
		"topic": "Vinbaren mitt i Åre",
		"time": "21:00",
		"presentation": false
	}
];

var sundaySchedule = [
	{
		"id": "23",
		"title": "Vakna",
		"topic": "Piggare än en lärka",
		"time": "7:00",
		"presentation": false
	},
	{
		"id": "24",
		"title": "Buss till flyget",
		"topic": "Sova den sista blunden",
		"time": "10:20",
		"presentation": false
	},
	{
		"id": "25",
		"title": "Flyger från Frösön",
		"topic": "  ",
		"time": "12:20",
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
