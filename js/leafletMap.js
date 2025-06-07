let map = L.map('map').setView([-8.97448, -48.172906], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let polygon = L.polygon([
    [-8.963459, -48.177709],
    [-8.967868, -48.176936],
    [-8.972361, -48.177108],
    [-8.976006, -48.177795],
    [-8.97855, -48.177022],
    [-8.97855, -48.177022],
    [-8.980076, -48.180026],
    [-8.97855, -48.184145],
    [-8.971004, -48.185003],
    [-8.963798, -48.184231],
    [-8.961424, -48.180283]
]).addTo(map);

let marker = L.marker([-8.975837, -48.173246]).addTo(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

let popup = L.popup()
    .setLatLng([-8.961832, -48.180046])
    .setContent("Área Alagada: 50km²")
    .openOn(map);