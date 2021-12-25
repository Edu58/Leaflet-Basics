const Map = L.map("mapdiv", { center: [-1.286389, 36.817223], zoom: 10 }); //create map object
/*
const Map = L.map("mapdiv").setView([-1.286389, 36.817223], 10); //shorter way
*/

/*
Adding a WMS tile layer

const USGS = L.tileLayer.wms("http://basemap.nationalmap.gov/ArcGIS/services/US
GSImageryTopo/MapServer/WMSServer",
layers: '0',
format: 'image/png',
transparent: true,
attribution: 'USGS' //or <small> <a href='http://basemap.nationalmap.gov/arcgis/rest/
service'>USGS</a> </small>,
").addTo(Map)
*/

const TileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'); //add tile layer

TileLayer.addTo(Map) //add to created Map object

//Adding points to map
L.marker([-1.286389, 36.817223]).addTo(Map);

//Add polylines
L.polyline([[-1.286389, 36.817223], [-1.256389, 37.117223]], { color: 'blue', weight: 5 }).addTo(Map);

//Add polygons
L.polygon([[-1.286389, 36.817223], [-1.256389, 36.417223], [-1.126389, 36.517223]], { fillColor: 'blue', fillOpacity: 0 }).addTo(Map);

//Adding rectangles
L.rectangle([[-1.686389, 36.817223], [-1.356389, 36.717223]], { fillColor: 'blue', fillOpacity: 0 }).addTo(Map);

//Adding circles
L.circle([-1.396389, 36.517223], 9000, { color: 'blue', weight: 5, fillColor: 'purple', fillOpacity: 1 }).addTo(Map);

//Adding multipolylines
L.multiPolyline([[[35.10418, -106.62987], [35.19738, -106.875], [35.07946, -106.80634]], [[35.11654, -106.58318], [35.13142, -106.48876], [35.07384, -106.52412]]], { color: 'red', weight: 8 }).addTo(Map);

//Adding multipolygons
L.multiPolygon([[[35.10418, -106.62987], [35.19738, -106.875], [35.07946, -106.80634]], [[35.11654, -106.58318], [35.13142, -106.48876], [35.07384, -106.52412]]], { color: 'red', weight: 8 }).addTo(Map);

//Add layergroup
const marker = L.marker([35.10418, -106.62987]);
const marker2 = L.marker([35.02381, -106.63811]);
const polyline = L.polyline([[35.10418, -106.62987], [35.19738, -106.875], [35.07946, -106.80634]], { color: 'red', weight: 8 }).bindPopup("I am a Polyline");

const myLayerGroup = L.layerGroup([marker, polyline]).addTo(Map);
myLayerGroup.addLayer(marker2); //add layer to layergroup

//Adding featuregroups
//A feature group is similar to a layer group, but extends it to allow mouse events and
//includes the bindPopup() method
const myfeatureGroup = L.featureGroup([marker, marker2, polyline])
  .addTo(map)
  .setStyle({ color: "purple", opacity: 0.5 })
    .bindPopup("We have the same popup because we are a group");

myfeatureGroup.addTo(Map)
    
//Adding Popups
//The bindPopup() method allows you to enter HTML as the content
marker.bindPopup("<h1>My Marker</h1><p>This is information about the marker</p><ul><li>Info 1</li><li>Info 2</li><li>Info 3</li></ul>");

//You can also create an instance of the popup class and then assign it to multiple objects
const mypopup = L.popup({ keepInView: true, closeButton: false }).setContent(
    "<h1>My Marker</h1><p>This is information about the marker</p><ul><li>Info 1</li><li>Info 2</li><li>Info 3</li></ul>");
marker.bindPopup(mypopup);
marker2.bindPopup(mypopup);

/*
CREATING POPUP INSTANCE FOR REUSING

const marker1 = L.marker([35.10418, -106.62987]).addTo(map).bindPopup(createPopup("Text as a parameter"));
const marker2 = L.marker([35, -106]).addTo(map).bindPopup(createPopup("Different text as a parameter"));

functioncreatePopup(x){
return L.popup({keepInView:true,closeButton:false}).setContent(x);
}
*/

/*
MOBILE MAPPING
use locate() to get location of devices with GPS

map.locate({setView: true, maxzoom: 10});

map.on('locationfound', foundLocation);
map.on('locationerror', notFoundLocation);

map.on('click',function(e){
const coord=e.latlng.toString().split(',');
const lat=coord[0].split('(');
const long=coord[1].split(')');
alert("you clicked the map at LAT: "+ lat[1]+" and LONG:"+long[0])
});

function foundLocation(e){
const mydate = new Date(e.timestamp);
L.marker(e.latlng).addTo(Map).bindPopup(mydate.toString())
};

function notFoundLocation(e){
alert("Unable to find your location. You may need to enable
Geolocation.");
}
}
*/