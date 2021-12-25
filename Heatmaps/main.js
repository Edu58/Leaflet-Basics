const Map = L.map("mapdiv").setView([-41.5396, 174.1242], 10); //create map object
const TileLayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png"); //bring in tilelayer

TileLayer.addTo(Map);

let quakePoints = [
  [-41.5396, 174.1242, 200.7345], //Lat Lng Value
  [-38.8725, 175.9561, 200.6901],
  [-41.8992, 174.3117, 150.6968],
  [-41.7495, 174.02, 100.8642],
  [-41.7008, 174.0876, 200.1629],
  [-41.7371, 174.0682, 200.0408],
  [-41.372, 173.3502, 200.7565],
  [-41.7511, 174.0623, 200.4531],
  [-41.7557, 174.3391, 200.1871],
  [-41.6881, 174.2726, 300.1336],
  [-41.7463, 174.1194, 200.7113],
  [-41.6966, 174.1238, 200.4168],
];

let heat = L.heatLayer(quakePoints, {
  radius: 30,
  blur: 25,
  maxzoom: 17,
}).addTo(Map);
/*
TO ADD GRADIENT

{.4:"blue",.6:"cyan",.7:"lime",.8:"yellow",1:"red"}

You can specify ranges from 0 to 1 . The outermost color is 0 and the center is 1 .
*/

//To add new data
heat.addLatLng([-41.5395, 174.3242, 180.3906]);

/*
const interval = setInterval(changeHeatMap, 2000);

function changeHeatMap() {
    Map.removeLayer(heat);
  heat = L.heatLayer(quakepoints2, { radius: 30, blur: 15, maxzoom: 17 }).addTo(Map);

  function changeHeatMapAgain() {
     Map.removeLayer(heat);
    heat = L.heatLayer(quakepoints3, { radius: 30, blur: 15, maxzoom: 17 }).addTo(Map);
  }
  setInterval(changeHeatMapAgain, 2000)
  
}
*/