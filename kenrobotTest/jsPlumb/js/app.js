;
(function() {

    // var listDiv = document.getElementById("list"),

    //     // showConnectionInfo = function(s) {
    //     //     listDiv.innerHTML = s;
    //     //     listDiv.style.display = "block";
    //     // },
    //     // hideConnectionInfo = function() {
    //     //     listDiv.style.display = "none";
    //     // },
        connections = [],
    //     updateConnections = function(conn, remove) {
    //         if (!remove) connections.push(conn);
    //         else {
    //             var idx = -1;
    //             for (var i = 0; i < connections.length; i++) {
    //                 if (connections[i] == conn) {
    //                     idx = i;
    //                     break;
    //                 }
    //             }
    //             if (idx != -1) connections.splice(idx, 1);
    //         }
    //         if (connections.length > 0) {
    //             console.log("sb");
    //         }
    //     };

    jsPlumb.ready(function() {

        var instance = jsPlumb.getInstance({

        });

        // suspend drawing and initialise.
        instance.batch(function() {

            // bind to connection/connectionDetached events, and update the list of connections on screen.
            jsPlumb.bind("connection", function(info, originalEvent) {
                console.log("sb");
            });



            // configure some drop options for use by all endpoints.
            var exampleDropOptions = {
                tolerance: "touch",
                hoverClass: "dropHover",
                activeClass: "dragActive"
            };

            var exampleColor = "#00f";
            var exampleEndpoint = {
                endpoint: "Rectangle",
                paintStyle: {
                    width: 25,
                    height: 21,
                    fill: exampleColor
                },
                isSource: true,
                reattach: true,
                scope: "blue",
                connectorStyle: {
                    gradient: {
                        stops: [
                            [0, exampleColor],
                            [0.5, "#09098e"],
                            [1, exampleColor]
                        ]
                    },
                    strokeWidth: 5,
                    stroke: exampleColor,
                    dashstyle: "2 2"
                },
                isTarget: true,
                beforeDrop: function(params) {
                    return confirm("Connect " + params.sourceId + " to " + params.targetId + "?");
                },
                dropOptions: exampleDropOptions
            };

            //
            // the second example uses a Dot of radius 15 as the endpoint marker, is both a source and target,
            // and has scope 'exampleConnection2'.
            //
            var color2 = "#316b31";
            var exampleEndpoint2 = {
                endpoint: ["Dot", {
                    radius: 11
                }],
                paintStyle: {
                    fill: color2
                },
                isSource: true,
                scope: "green",
                connectorStyle: {
                    stroke: color2,
                    strokeWidth: 6
                },
                connector: ["Bezier", {
                    curviness: 63
                }],
                maxConnections: 3,
                isTarget: true,
                dropOptions: exampleDropOptions
            };


            // setup some empty endpoints.  again note the use of the three-arg method to reuse all the parameters except the location
            // of the anchor (purely because we want to move the anchor around here; you could set it one time and forget about it though.)
            var e1 = instance.addEndpoint('dragDropWindow1', {
                anchor: [0.5, 1, 0, 1]
            }, exampleEndpoint2);

            // setup some DynamicAnchors for use with the blue endpoints
            // and a function to set as the maxConnections callback.
            var anchors = [
                    [1, 0.2, 1, 0],
                    [0.8, 1, 0, 1],
                    [0, 0.8, -1, 0],
                    [0.2, 0, 0, -1]
                ],
                maxConnectionsCallback = function(info) {
                    alert("Cannot drop connection " + info.connection.id + " : maxConnections has been reached on Endpoint " + info.endpoint.id);
                };


            var e2 = instance.addEndpoint('dragDropWindow2', {
                anchor: [0.5, 1, 0, 1]
            }, exampleEndpoint);
            // again we bind manually. it's starting to get tedious.  but now that i've done one of the blue endpoints this way, i have to do them all...
            e2.bind("maxConnections", maxConnectionsCallback);
            instance.addEndpoint('dragDropWindow2', {
                anchor: "RightMiddle"
            }, exampleEndpoint2);


            // make .window divs draggable
            instance.draggable(jsPlumb.getSelector(".drag-drop-demo .window")); //移动方块

            var detachLinks = jsPlumb.getSelector(".drag-drop-demo .detach");
            instance.on(detachLinks, "click", function(e) {
                instance.detachAllConnections(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

            instance.on(document.getElementById("clear"), "click", function(e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
        });
    });
})();