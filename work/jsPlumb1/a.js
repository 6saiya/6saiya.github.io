jsPlumb.ready(function() {

	jsPlumb.importDefaults({
		DragOptions: {
			cursor: 'pointer',
			zIndex: 2000
		},
		PaintStyle: {
			strokeStyle: '#666'
		},
		EndpointStyle: {
			width: 20,
			height: 16,
			strokeStyle: '#666'
		},
		Endpoint: "Rectangle",
		Anchors: ["TopCenter"],
		//控制是否有箭头
		ConnectionOverlays: [
			["Arrow", {
				location: 1
			}],
			["Label", {
				location: 0.1,
				id: "label",
				cssClass: "aLabel"
			}]
		]
	});

	var exampleDropOptions = {
		hoverClass: "dropHover",
		activeClass: "dragActive"
	};

	var basicType = {
		connector: "StateMachine",
		paintStyle: {
			strokeStyle: "red",
			lineWidth: 4
		},
		hoverPaintStyle: {
			strokeStyle: "blue"
		},
		overlays: [
			"Arrow"
		]
	};

	jsPlumb.registerConnectionType("basic", basicType);

	/////////////        示例1       ///////////////

	var color1 = "#316b31";
	var exampleEndpoint1 = {
		uuid: 101,
		endpoint: ["Dot", {
			radius: 11
		}], //连接点的形状、大小
		paintStyle: {
			fillStyle: color1
		}, //连接点的颜色
		isSource: true,
		scope: "green dot", //点击该颜色的时候，其余该颜色的点都会显示虚线框
		connectorStyle: {
			strokeStyle: color1,
			lineWidth: 6
		}, //点与点之间连线颜色
		connector: "Straight", //线条形状，直线
		maxConnections: 1,
		isTarget: true,
		dropOptions: exampleDropOptions
	};

	var exampleEndpoint11 = {
		uuid: 1011,
		endpoint: ["Dot", {
			radius: 11
		}], //连接点的形状、大小
		paintStyle: {
			fillStyle: color1
		}, //连接点的颜色
		isSource: true,
		scope: "green dot", //点击该颜色的时候，其余该颜色的点都会显示虚线框
		connectorStyle: {
			strokeStyle: color1,
			lineWidth: 6
		}, //点与点之间连线颜色
		connector: "Straight", //线条形状，直线
		maxConnections: 1,
		isTarget: true,
		dropOptions: exampleDropOptions,
		overlays: [
			"Arrow"
		]
	};


	maxConnectionsCallback = function(info) {
		alert("Cannot drop connection " + info.connection.id + " : maxConnections has been reached on Endpoint " + info.endpoint.id);
	};


	//生成点   
	var e1 = jsPlumb.addEndpoint("state2", {
		anchor: "LeftMiddle"
	}, exampleEndpoint11);
	e1.bind("maxConnections", maxConnectionsCallback);
	jsPlumb.addEndpoint("state1", exampleEndpoint1);

	// {anchor: "TopCenter"},


	//固定连线
	// jsPlumb.connect({
	//   uuids: [101, 1011]
	// });


	//可拖动
	jsPlumb.draggable($('._jsPlumb_endpoint_anchor_'));
});