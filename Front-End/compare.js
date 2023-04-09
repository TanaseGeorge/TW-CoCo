
    // Datele pentru cele două seturi de date
    var dataset1 = [
    {region: 'Nord', value: 20},
    {region: 'Sud', value: 10},
    {region: 'Vest', value: 15},
    {region: 'Est', value: 30},
    {region: 'Centru', value: 25}
    ];

    var dataset2 = [
    {region: 'Nord', value: 25},
    {region: 'Sud', value: 12},
    {region: 'Vest', value: 18},
    {region: 'Est', value: 28},
    {region: 'Centru', value: 22}
    ];

    // Setările pentru diagramă
    var margin = {top: 50, right: 50, bottom: 100, left: 100};
    var width = 800 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    // Selectorul SVG
    var svg = d3.select('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Funcția pentru actualizarea diagramei
    function updateChart(region, interval) {
    // Se selectează setul de date în funcție de regiune
    var data;
    if (region === 'all') {
    data = dataset1.concat(dataset2);
} else if (region === 'north') {
    data = dataset1.filter(function(d) { return d.region === 'Nord'; })
    .concat(dataset2.filter(function(d) { return d.region === 'Nord'; }));
} else if (region === 'south') {
    data = dataset1.filter(function(d) { return d.region === 'Sud'; })
    .concat(dataset2.filter(function(d) { return d.region === 'Sud'; }));
}

    // Se filtrează datele în funcție de interval
    if (interval === 'last_year') {
    data = data.filter(function(d) { return d.date > new Date().setFullYear(new Date().getFullYear() - 1); });
} else if (interval === 'last_quarter') {
    data = data.filter(function(d) { return d.date > new Date().setMonth(new Date().getMonth() - 3); });
} else if (interval === 'last_month') {
    data = data.filter(function(d) { return d.date > new Date().setMonth(new Date().getMonth() - 1); });
}

    // Se calculează valorile maxime pentru axele X și Y
    var xMax = d3.max(data, function(d) { return d.value; });
    var yMax = d3.max(data, function(d) { return d.region; });

    // Scalarea pentru axa X
    var xScale = d3.scaleLinear()
    .domain([0, xMax])
    .range([0, width]);

    // Scalarea pentru axa Y
    var yScale = d3.scaleBand()
        .domain(data.map(function(d) { return d.region; }))
        .range([height, 0])
        .paddingInner(0.1);

        // Crearea axei X
        var xAxis = d3.axisBottom(xScale);

        // Crearea axei Y
        var yAxis = d3.axisLeft(yScale);

        // Adăugarea axei X
        svg.select('.x-axis')
            .attr('transform', 'translate(0,' + height + ')')
            .transition()
            .duration(1000)
            .call(xAxis);

        // Adăugarea axei Y
        svg.select('.y-axis')
            .transition()
            .duration(1000)
            .call(yAxis);

        // Adăugarea datelor
        var bars = svg.selectAll('.bar')
            .data(data);

        // Se elimină barele vechi
        bars.exit().remove();

        // Se adaugă barele noi
        bars.enter().append('rect')
            .attr('class', 'bar')
            .attr('x', 0)
            .attr('y', function(d) { return yScale(d.region); })
            .attr('height', yScale.bandwidth())
            .attr('fill', function(d, i) { return i < dataset1.length ? '#ff8c00' : '#6495ed'; })
            .merge(bars)
            .transition()
            .duration(1000)
            .attr('width', function(d) { return xScale(d.value); });

        // Se adaugă legenda
        var legend = svg.selectAll('.legend')
            .data(['Setul de date 1', 'Setul de date 2']);

        legend.enter().append('text')
            .attr('class', 'legend')
            .attr('x', width - 120)
            .attr('y', -20)
            .merge(legend)
            .text(function(d) { return d; })
            .attr('fill', function(d, i) { return i === 0 ? '#ff8c00' : '#6495ed'; });
    }

    // Se inițializează diagrama cu valorile implicite
    updateChart('all', 'last_year');

    // Se adaugă evenimentele pentru selectoare
    d3.select('#region-selector').on('change', function() {
        var region = d3.select(this).node().value;
        var interval = d3.select('#interval-selector').node().value;
        updateChart(region, interval);
    });

    d3.select('#interval-selector').on('change', function() {
        var region = d3.select('#region-selector').node().value;
        var interval = d3.select(this).node().value;
        updateChart(region, interval);
    });

