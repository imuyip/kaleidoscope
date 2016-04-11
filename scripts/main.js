// put objects in triangle
// kaleidoscope reflectons
// rotation

var svg = d3.select("#canvas")
  .append("svg")
  .attr("height","100%")
  .attr("width","100%");

var width = parseFloat(svg.style("width"))
  , height = parseFloat(svg.style("height"));

var g = svg.append("g");

var containerTriangle = g.append("path")
.attr("fill", "white")
.attr("d", d3.svg.symbol().type("triangle-up").size(15000))
.attr("transform","translate(" + width/2  + ", " + height/2 + ")")

var rotatorCircle = g.append("path")
.attr("fill", "none")
.attr("stroke","white")
.attr("stroke-dasharray","10,10")
.attr("d", d3.svg.symbol().type("circle").size(38000))
.attr("transform","translate(" + width/2  + ", " + height/1.84 + ")")
