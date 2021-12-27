const Map = L.map("mapdiv").setView([-1.286389, 36.817223], 10);

//load tiles
const Tiles = L.esri.Vector.vectorBasemapLayer("ArcGIS:StreetsNight", {
  apikey:
    "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR",
}).addTo(Map);

//create the search control
const searchControl = new L.esri.Geocoding.geosearch({
  providers: [
    L.esri.Geocoding.arcgisOnlineProvider({
      apikey:
        "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR",
    }),
  ]
}).addTo(Map);

//create layer to place results in
const results = new L.LayerGroup().addTo(Map);

searchControl.on('results', function (data) {
    results.clearLayers();

    for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng).bindPopup(data.text));
    }
});