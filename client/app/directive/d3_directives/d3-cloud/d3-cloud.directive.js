'use strict';

angular.module('angularFullstack2App')
  .directive('d3Cloud', function () {
    return {
      templateUrl: 'app/directive/d3_directives/d3-cloud/d3-cloud.html',
      restrict: 'EA',
      scope:{
      	data:'='
      },
      link: function (scope, element, attrs) {

		var fill = d3.scale.category20();

		d3.layout.cloud()
		    .size([500, 500])
		    .words([
		      "Hello", "world", "normally", "you", "want", "more", "words",
		      "than", "this"].map(function(d) {
		      return {text: d, size: 10 + Math.random() * 90, test: "haha"};
		    }))
		    .padding(5)
		    .rotate(function() { return ~~(Math.random() * 2) * 90; })
		    .font("Impact")
		    .fontSize(function(d) { return d.size; })
		    .on("end", draw)
		    .start();

		function draw(words) {
		  d3.select(scope.data.div).append("svg")
		      .attr("width", 400)
		      .attr("height", 400)
		    .append("g")
		      .attr("transform", "translate(150,150)")
		    .selectAll("text")
		      .data(words)
		    .enter().append("text")
		      .style("font-size", function(d) { return d.size + "px"; })
		      .style("font-family", "Impact")
		      .style("fill", function(d, i) { return fill(i); })
		      .attr("text-anchor", "middle")
		      .attr("transform", function(d) {
		        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		      })
		      .text(function(d) { return d.text; });
		}


      }//end of Link
    };//end of Directive
  });//end of Module