let latitude = 43, longitude = -80;

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v12',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var img1 = document.querySelector("#ripleysAquarium")
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([43.6424, -79.3862])
	.addTo(map);

var img2 = document.querySelector("#CNTower")

var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([43.6425, -79.3872])
	.addTo(map);

var img3 = document.querySelector("#royalOntarioMuseum")
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([43.6674, -79.3947])
	.addTo(map);

var img4 = document.querySelector("#scienceCenter")
var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([43.7169, -79.3389])
	.addTo(map);
