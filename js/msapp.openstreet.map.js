/****************************************
 START OPENSTREET MAP
****************************************/
if($("#js-ms-map").length) {

	// Your position we will use later
	let lat = 23.82253,
	lon = 90.36413;

	// Initialize map
	map = L.map('js-ms-map').setView([lat, lon], 19);

	// set map tiles source
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
		maxZoom: 18,
	}).addTo(map);

	// Add your marker to the map
	marker = L.marker([lat, lon]).addTo(map);

	// Add your address on popup to the marker
	marker.bindPopup("<b>MSAPP</b><br />Plot No 1/11, Kaderia Manzil <br />Dhaka-1216, Bangladesh").openPopup();
}
/****************************************
 END OPENSTREET MAP
****************************************/