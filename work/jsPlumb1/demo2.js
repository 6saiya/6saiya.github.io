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
    connector: ["Bezier", {
      curviness: 63
    }], //线条形状，可弯曲
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
    connector: ["Bezier", {
      curviness: 63
    }], //线条形状，可弯曲
    maxConnections: 1,
    isTarget: true,
    dropOptions: exampleDropOptions,
    overlays: [
      "Arrow"
    ]
  };


/////////////        示例2       ///////////////


  var color2 = "rgba(229,219,61,0.5)";
  var exampleEndpoint2 = {
    uuid: 102,
    endpoint: "Rectangle",
    anchor: "BottomLeft", //连接点的位置，可以被覆盖
    paintStyle: {
      fillStyle: color2,
      opacity: 0.5
    },
    isSource: true,
    scope: 'yellow dot',
    connectorStyle: {
      strokeStyle: color2,
      lineWidth: 4
    },
    connector: "Straight", //线条形状，直线
    isTarget: true,
    dropOptions: exampleDropOptions,
    beforeDetach: function(conn) {
      return confirm("Detach connection?");
    },
    onMaxConnections: function(info) {
      alert("Cannot drop connection " + info.connection.id + " : maxConnections has been reached on Endpoint " + info.endpoint.id);
    }
  };

  var exampleEndpoint21 = {
    uuid: 1021,
    endpoint: "Rectangle",
    anchor: "BottomLeft", //连接点的位置，可以被覆盖
    paintStyle: {
      fillStyle: color2,
      opacity: 0.5
    },
    isSource: true,
    scope: 'yellow dot',
    connectorStyle: {
      strokeStyle: color2,
      lineWidth: 4
    },
    connector: "Straight", //线条形状，直线
    isTarget: true,
    dropOptions: exampleDropOptions,
    beforeDetach: function(conn) {
      return confirm("Detach connection?");
    },
    onMaxConnections: function(info) {
      alert("Cannot drop connection " + info.connection.id + " : maxConnections has been reached on Endpoint " + info.endpoint.id);
    }
  };



  //左上角为起点，0.2表示相对x的偏移量，0.5表示相对y的偏移量
  var anchors = [
      [0.2, 0.5, 1, 0],
      [0.8, 1, 0, 1],
      [0, 0.8, -1, 0],
      [0.2, 0, 0, -1]
    ],
    maxConnectionsCallback = function(info) {
      alert("Cannot drop connection " + info.connection.id + " : maxConnections has been reached on Endpoint " + info.endpoint.id);
    };
  var e1 = jsPlumb.addEndpoint("state2", {
    anchor: "LeftMiddle"
  }, exampleEndpoint11);
  e1.bind("maxConnections", maxConnectionsCallback);
  jsPlumb.addEndpoint("state1", exampleEndpoint1);
  jsPlumb.addEndpoint("state3", exampleEndpoint2);
  jsPlumb.addEndpoint("state4", {anchor: anchors}, exampleEndpoint21);

  //固定连线
  // jsPlumb.connect({
  //   uuids: [101, 1011]
  // });
  jsPlumb.connect({
    uuids: [102, 1021]
  });

  //可拖动
  jsPlumb.draggable($('._jsPlumb_endpoint_anchor_'));
});