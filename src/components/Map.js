import React from 'react';

export default class Map extends React.Component{

	componentDidMount(){
		const mapOptions = {
			zoom: 14,
			center: new google.maps.LatLng(63.401009, 13.077261),
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.TERRAIN
		};
		const map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		let infowindow = new google.maps.InfoWindow({});

		this.props.markers.map( (item) => {
			let marker = new google.maps.Marker({
				position: new google.maps.LatLng(item.coordinate.lat, item.coordinate.lon),
				map: map,
				title: item.name,
				label: item.name
			});
			marker.addListener('click', () => {
				infowindow.setContent('<p>'+item.name+'</p>');
				infowindow.open(map, marker);
			});
			return marker;
		});
	}

	render(){
		return (<div id="map-canvas"></div>);
	}
}
