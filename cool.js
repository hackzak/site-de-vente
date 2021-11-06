var i = 0;

var svg = d3.select('body')
                    .append('svg')
                    .attr('width', 1920)
                    .attr('height', 1080)

svg.append('rect')
.attr('width', 1920)
.attr('height', 1080)
.on('mousemove', anim)

function anim(){

    var cord = d3.mouse(this)
    console.log(coord)

    svg.insert('circle', 'rect')
                .attr('cx', coord[0])
                .attr('cy', coord[1])
                .attr('r', 0)
                //couleur
                .transition()
                .duration(1500)
                .ease(d3.easeCircleOurt)
                .attr('r', 150)
                .style('opasity', o)
                .remove()

}