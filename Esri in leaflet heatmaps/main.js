const Map = L.map("mapdiv").setView([-1.286389, 36.817223], 10); //create map object
L.esri.basemapLayer('Gray').addTo(Map)

L.esri.Heat.heatmapFeatureLayer({
  url: "https://gis.ohiodnr.gov/arcgis/rest/services/DGS_Services/Earthquakes/MapServer/0",
  radius: 12
}).addTo(Map);