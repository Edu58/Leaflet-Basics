const map = L.map("mapdiv").setView([42.4614, -72.5079], 10);

const tileLayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");
tileLayer.addTo(map);

const shapeFile = new L.Shapefile("./leaflet.shapefile-gh-pages/maSP.zip",
  /*
    {
    style: function () {
        return {
            color: "gray",
            fillColor: "blue",
            fillOpacity: 75
        }
}},
*/

  {
    onEachFeature: (feature, layer) => {
      layer.bindPopup(`<h1>${feature.properties.TOWN}</h1> <br>
                        <h1>${
                          "Pop-2010: " +
                          feature.properties.POP2010.toLocaleString()
                        }</h1>`);

      /*
        for (key in feature.properties) { // Get attribute table data
            console.log(key)
        }
        */

      /* GET ALL PROPERTIES

        let propHolder = [];
        for (key in feature.properties) {
            propHolder.push(key + feature.properties[key] + '<br>');
            popupContent = propHolder.join("");
            layer.bindPopup(popupContent)
        }
        */
    },
  }
).addTo(map);
