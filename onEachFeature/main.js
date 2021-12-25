L.geoJson(geojson, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.title);
  },
}).addTo(map);
