const map = L.map("mapdiv").setView([-1.28333, 36.81667], 10)
const tileLayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

tileLayer.addTo(map)

const mapboxAccessToken = "pk.eyJ1IjoiZWR3aW41OCIsImEiOiJja3hrMXhuemkxc2ltMnZucDhhNWhwOG93In0.2R0J1aTLv1Gfd8eVbv2eHA"

L.MakiMarkers.accessToken = mapboxAccessToken;

const customMarker = L.MakiMarkers.icon({ icon: 'city', color: '#f54242', size: 'm' });
L.marker([-1.28333, 36.81667], {icon: customMarker}).addTo(map);