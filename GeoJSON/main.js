const Map = L.map("mapdiv").setView([-1.286389, 36.817223], 10); //create map object
const TileLayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png"); //bring in tilelayer

TileLayer.addTo(Map);

// The following GeoJSON code shows you two points in a feature collection
const geoJson = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [36.817223, -1.286389], //long lat
    },
    properties: {
      name: "Point 1",
      title: "Nairobi",
    },
  },

  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [36.517223, -1.126389], //long lat
    },
    properties: {
      name: "Point 2",
      title: "Around Nairobi",
    },
  },

  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [36.217223, -1.326389], //long lat
    },
    properties: {
      name: "Point 2",
      title: "Around Nairobi",
    },
  }
];



//Adding GeoJSON to map
L.geoJson(geoJson, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.title);
    }
}).addTo(Map);

/*
ADDING MULTIPLE GEOMETRIES IN GeoJSON
const geojson = [{
    "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-106.62987, 35.10418]
        },
        "properties": {
        "name": "My Point",
        "title": "A point at the Big I"
        }
    },

{
    "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates":
                [[-106.67999, 35.14097],
                [-106.68892, 35.12974],
                [-106.69064, 35.1098]]
        },
        "properties": {
        "name": "My LineString",
        "title": "A line along the Rio Grande"
        }
    },

{
    "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates":
                [[[-106.78059, 35.14574],
                [-106.7799, 35.10559],
                [-106.71467, 35.13704],
                [-106.69716, 35.17942],
                [-106.78059, 35.14574]]] //You must close polygon in GeoJSON
        },
        "properties": {
            "name": "My Polygon",
            "title": "Balloon Fiesta Park"
        }
}];
*/

/*

//Convert objects to GeoJSON
const Marker = L.marker([36.517223, -1.126389]);
const MarkerGeoJSON = Marker.toGeoJSON();
L.geoJson(MarkerGeoJSON).addTo(Map);



//STYLING GeoJSON LAYERS
/*
GeoJSON layers have a style option and a setStyle() method. Using the style
option, you specify a function that will style the layer.
The setStyle() method allows you to change the style after one has already been
applied or by using events.
*/

/*

//Style
function style(feature) {
    switch (feature.geometry.type) {
        case 'LineString': return { color: 'red' }; break;
        case 'Polygon': return { color: 'purple' }; break;
    }
}

L.geoJson(geoJson, { style: style }).addTo(Map);

//SetStyle
function newStyle() {
    geoJson.setStyle({ color: 'green' });
}
geoJson.on("mouseover", newStyle);
geoJson.on('mouseout', (e) => {
    geoJson.resetStyle(e.target)
});

*/
