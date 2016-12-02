jsPlumb.ready(function() {

	jsPlumb.bind("connection", function(info, originalEvent) {
		console.log("Hardware right");
		allquesion[0] = 1;
		console.log(allquesion);
		var QusetionDisplay = document.getElementById("HardwareNav");
		QusetionDisplay.innerHTML = '<img src="img/right.png">';
	});



	var color1 = "#fdbf2d";
	var endpointOption = {
		endpoint: ["Dot", {
			radius: 11
		}], //连接点的形状、大小
		paintStyle: {
			fillStyle: "green"
		}, //连接点的颜色
		isSource: true,
		isTarget: true,
		connectorStyle: {
			strokeStyle: color1,
			lineWidth: 6
		}, //点与点之间连线颜色
		connector: "Straight", //线条形状，直线
		maxConnections: 1,
	};

	jsPlumb.addEndpoint("CsonnectionPoint13", endpointOption);
	jsPlumb.addEndpoint("LED", endpointOption);

	//可拖动
	// jsPlumb.draggable("CsonnectionPoint13");
	// jsPlumb.draggable("LED");	
});