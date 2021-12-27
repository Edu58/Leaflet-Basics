const Map = L.map("mapdiv").setView([-1.286389, 36.817223], 10);

//load tiles
L.esri.Vector.vectorBasemapLayer("ArcGIS:StreetsNight", {
  apikey:
    "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR"
}).addTo(Map);

//create the search control
const geocodingService = L.esri.Geocoding.geocodeService({
  apikey:
    "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR",
});

Map.on('click', (e) => {
  geocodingService.reverse().latlng(e.latlng).run((err, result) => {
    try {
      Marker = L.marker(result.latlng).addTo(Map)
      Marker.bindPopup(
        `
        <h2>Place: ${result.address.Match_addr}</h2>
        <h3>Label: ${result.address.LongLabel}</h3>
        <h3>Address: ${result.address.Address}</h3>
        <h3>City: ${result.address.City}</h3>
        <h3>Region: ${result.address.Region}</h3>
        <h3>Country Code: ${result.address.CountryCode}</h3>
        `
      ).openPopup();
    } catch (error) {
      console.error(err)
    }
  })
});