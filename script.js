var i = 0;

var svg = d3.select('body')
            .append('svg')
            .attr('width', 1912)
            .attr('height', 1080);

svg.append('rect')
.attr('width', 1920)
.attr('height', 1080)
.on('mousemove', anim);

function anim(){

    var coord = d3.mouse(this);
    console.log(coord);

}