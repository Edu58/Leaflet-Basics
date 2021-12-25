const Map = L.map("mapdiv", { center: [-1.286389, 36.817223], zoom: 10 }); //create map object

const TileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'); //add tile layer

TileLayer.addTo(Map) //add to created Map object

//Add bar and pie chart
const options = {
  data: {
    data1: 20,
    data2: 50,
    data3: 10,
    data4: 20,
  },
  chartOptions: {
    data1: {
      fillColor: "blue",
      minValue: 0,
      maxValue: 50,
      maxHeight: 30,
    },
    data2: {
      fillColor: "red",
      minValue: 0,
      maxValue: 50,
      maxHeight: 30,
    },
    data3: {
      fillColor: "green",
      minValue: 0,
      maxValue: 50,
      maxHeight: 30,
    },
    data4: {
      fillColor: "yellow",
      minValue: 0,
      maxValue: 50,
      maxHeight: 30,
    },
  },
  weight: 1,
  color: "#000000",
  radius: 30,
  fillOpacity: 1,
};

const bar = L.BarChartMaker([-1.286389, 36.817223], options);
bar.addTo(Map);

const pie =  L.PieChartMaker([-1.286389, 36.517223], options);
pie.addTo(Map);