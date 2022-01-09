const Map = L.map("mapdiv").setView([38.5, -98.0], 4);

L.esri.Vector.vectorBasemapLayer("ArcGIS:LightGray:Base", {
  apikey:
    "AAPKf2b8d3e6dc294dd284c1c7cd64ca81acP3m2qEpZ1nXLbIrKfvRuT-kQ76E56-z8umEeb5EXfxA2kRWmu5NTAoJV9FZfgCCR",
}).addTo(Map);

//color the states according to population
function getColor(d) {
  return d > 1000 ? '#b10026' :
    d > 500 ? '#e31a1c' :
      d > 200 ? '#fc4e2a' :
        d > 100 ? '#fd8d3c' :
          d > 50 ? '#feb24c' :
            d > 20 ? '#fed976' :
              d > 10 ? '#fed976' :
                '#ffffcc';
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: 'white',
    dasharray: '3',
    fillOpacity: 0.7
  };
}

//Response on click
function highlightState(e) {
  const layer = e.target;

  layer.setStyle({
    weight: 5,
    color: "#4a1486",
    dashArray: '',
    fillOpacity: 0.7
  });

  info.update(layer.feature.properties);
}

//Reset changes on click
function resetHightlight(e) {
  geoJson.resetStyle(e.target)
  info.update();
}

//execute the functions
function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightState,
    mouseout: resetHightlight
  })
}

geoJson = L.geoJSON(statesData, {
  style: style,
  onEachFeature: onEachFeature,
}).addTo(Map);



//Create a custom info control
const info = L.control();

info.onAdd = function (Map) {
  this._div = L.DomUtil.create('div', 'info'); //div with class info
  this.update();
  return this._div
};

info.update = function (props) {
  this._div.innerHTML = '<h2>US Population Density</h2>' + (
    props ? '<h2>' + props.name + '</h2> <h3>' + props.density + ' people / mi<sup>2</sup>'
      : '<h3> Hover over a state'
  );
}

info.addTo(Map)



//Custom Legend control
const legend = L.control({ position: 'bottomright' })

legend.onAdd = function (Map) {
  const div = L.DomUtil.create('div', 'legend'),
    grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    labels = ['dfsdf', 'fdsf', 'sdfsd','df','fdf','dfdf','dffd','dfdf'];
  
  //loop through the density intervals and generate labels
  for (let i = 0; i < grades.length; i++) {
    div.innerHTML +=  '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }

  return div;
}

legend.addTo(Map)