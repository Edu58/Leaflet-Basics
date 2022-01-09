const Map = L.map("mapdiv", { center: [-1.286389, 36.817223], zoom: 10 }); //create map object

const TileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'); //add tile layer

TileLayer.addTo(Map) //add to created Map object

L.control.betterscale({position: 'bottomright'}).addTo(Map)