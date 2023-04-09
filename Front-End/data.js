// Variabile globale
var data;
var svgWidth = 800;
var svgHeight = 400;
var margin = { top: 50, right: 50, bottom: 50, left: 50 };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Selectăm elementul SVG și îi setăm dimensiunile
var svg = d3.select("#chart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Adăugăm un grup pentru a afișa graficul
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Definim axele X și Y
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// Adăugăm axa X
g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

// Adăugăm axa Y
g.append("g")
    .call(d3.axisLeft(y));

// Adăugăm titlul graficului
g.append("text")
    .attr("class", "title")
    .attr("x", width / 2)
    .attr("y", 0 - margin.top / 2)
    .attr("text-anchor", "middle")
    .text("Consumer Confidence");

// Funcția de afișare a datelor pe grafic
function updateChart() {
    var filteredData = data;
// Filtrăm datele
// Actualizăm scala axei X
    x.domain(d3.extent(filteredData, function (d) {
        return d.date;
    }));
    // Actualizăm scala axei Y
    y.domain([0, d3.max(filteredData, function (d) {
        return d.value;
    })]);

// Adăugăm linia graficului
    var line = d3.line()
        .x(function (d) {
            return x(d.date);
        })
        .y(function (d) {
            return y(d.value);
        });

    g.select(".line")
        .datum(filteredData)
        .transition()
        .duration(1000)
        .attr("d", line);
}
// Funcția de încărcare a datelor și afișare a graficului
function loadData() {
    d3.csv("data.csv").then(function (csvData) {
// Formatăm datele
        var parseTime = d3.timeParse("%Y-%m-%d");
        data = csvData.map(function (d) {
            return {
                date: parseTime(d.date),
                value: +d.value
            };
        });
        // Adăugăm linia graficului
        g.append("path")
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2);

        // Actualizăm graficul
        updateChart();
    });
    loadData();
}