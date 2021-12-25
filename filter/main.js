L.geoJson(geoJson, {
  filter: function (feature, latlng) {
    switch (feature.properties.name) {
      case "My Point 1":
        return true;
      case "My Point 2":
        return false;
    }
  },
}).addTo(Map);