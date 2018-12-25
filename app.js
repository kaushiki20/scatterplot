var width = 500;
var height= 500;
var padding =20;

var yScale=d3.scaleLinear()
              .domain(d3.extent(data, d => d.subscribersPer100))
               .range([height - padding, padding]);
var xScale=d3.scaleLinear()
               .domain(d3.extent(data, d => d.adultLiteracyRate))
               .range([padding, width - padding]);
               
d3.select("svg")
.attr("width",width)
.attr("height",height)
.selectAll("circle")
.data(regionData)
.enter
.append("circle")
..attr("cx", d => xScale(d.adultLiteracyRate))
    .attr("cy", d => yScale(d.subscribersPer100))
    .attr("r", d => rScale(d.medianAge))
    .attr("fill", d => fScale(d.urbanPopulationRate))
    .attr("stroke", "#fff");

