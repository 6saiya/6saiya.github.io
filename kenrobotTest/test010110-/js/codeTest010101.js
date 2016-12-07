function kenrobotTest() {
	var key = [/digitalWrite\(13,1\);/ig,
		/delay\(1000\);/ig,
		/digitalWrite\(13,0\);/ig
	];

	var keyzz = ["digitalWrite(13,1);",
		"delay(1000);",
		"digitalWrite(13,0);"
	];

	var keyflag = 1;

	var otextarea = $("#Qipan").empty();
	otextarea = document.getElementById('foo').value;

	// console.log(otextarea.innerHTML);

	for (var i = 0; i < key.length; i++) {
		// console.log("keyflag" + keyflag);
		if (otextarea.match(key[i]) == keyzz[i]) {
			// console.log(otextarea.innerHTML.match(key[i]));
			keyflag++;

		}
	}
	if (key.length == keyflag) {
		console.log("code right");
		var QusetionDisplay = document.getElementById("codeNav");
		QusetionDisplay.innerHTML = '<img src="../img/right.png">';
		allquesion[1] = 1;
		passtest();
	} else {
		console.log("code error");
		var QusetionDisplay = document.getElementById("codeNav");
		QusetionDisplay.innerHTML = '<img src="../img/error.png">';
		allquesion[1] = 0;

	}
}

