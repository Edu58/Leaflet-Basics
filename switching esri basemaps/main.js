const map = L.map("mapdiv").setView([-1.286389, 36.817223], 10);

const vectorTiles = {};
const allEnums = [
  "ArcGIS:Imagery",
  "ArcGIS:Imagery:Standard",
  "ArcGIS:Imagery:Labels",
  "ArcGIS:LightGray",
  "ArcGIS:LightGray:Base",
  "ArcGIS:LightGray:Labels",
  "ArcGIS:DarkGray",
  "ArcGIS:DarkGray:Base",
  "ArcGIS:DarkGray:Labels",
  "ArcGIS:Navigation",
  "ArcGIS:NavigationNight",
  "ArcGIS:Streets",
  "ArcGIS:StreetsNight",
  "ArcGIS:StreetsRelief",
  "ArcGIS:StreetsRelief:Base",
  "ArcGIS:Topographic",
  "ArcGIS:Topographic:Base",
  "ArcGIS:Oceans",
  "ArcGIS:Oceans:Base",
  "ArcGIS:Oceans:Labels",
  "OSM:Standard",
  "OSM:StandardRelief",
  "OSM:StandardRelief:Base",
  "OSM:Streets",
  "OSM:StreetsRelief",
  "OSM:StreetsRelief:Base",
  "OSM:LightGray",
  "OSM:LightGray:Base",
  "OSM:LightGray:Labels",
  "OSM:DarkGray",
  "OSM-DarkGray:Base",
  "OSM-DarkGray:Labels",
  "ArcGIS:Terrain",
  "ArcGIS:Terrain:Base",
  "ArcGIS:Terrain:Detail",
  "ArcGIS:Community",
  "ArcGIS:ChartedTerritory",
  "ArcGIS:ChartedTerritory:Base",
  "ArcGIS:ColoredPencil",
  "ArcGIS:Nova",
  "ArcGIS:ModernAntique",
  "ArcGIS:ModernAntique:Base",
  "ArcGIS:Midcentury",
  "ArcGIS:Newspaper",
  "ArcGIS:Hillshade:Light",
  "ArcGIS:Hillshade:Dark",
];

//Setting a default layout(defaults to "ArcGIS:Streets" if left out)
vectorTiles.Default = L.esri.Vector.vectorBasemapLayer(null, {
  apikey:
    "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR",
});
  
allEnums.forEach((enumString) => {
  vectorTiles[enumString] = L.esri.Vector.vectorBasemapLayer(enumString, {
    apikey:
      "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR",
  });
});

//Control layers shown to the use
L.control
  .layers(vectorTiles, null, {
    collapsed: true,
  })
  .addTo(map);

vectorTiles.Default.addTo(map);
