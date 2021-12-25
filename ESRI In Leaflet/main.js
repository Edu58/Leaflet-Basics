const Map = L.map("mapdiv", { center: [-1.286389, 36.817223], zoom: 10 }); //create map object
L.esri.basemapLayer("Gray").addTo(Map);
//const TileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'); //add tile layer

//TileLayer.addTo(Map) //add to created Map object
/*
L.esri.Vector.vectorBasemapLayer("Gray", {
  apikey:
    "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR",
}).addTo(Map);
//const labels = L.esri.basemapLayer('StreetsLabels').addTo(Map)
*/
/*
const url = "https://coagisweb.cabq.gov/arcgis/rest/services/public/PublicArt/MapServer";

L.esri.dynamicMapLayer({url}).addTo(Map);

L.esri.Vector.vectorBasemapLayer("ArcGIS:Streets", {
  apikey:
    "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR"
}).addTo(Map);
*/

const dynamicLayer = L.esri
  .dynamicMapLayer({
    url: "https://coagisweb.cabq.gov/arcgis/rest/services/public/PublicArt/MapServer",
  }  
)
  .addTo(Map);

dynamicLayer.bindPopup((err, feature) => {
  return feature.features[0].properties.TITLE
})
