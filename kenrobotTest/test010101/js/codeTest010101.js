function kenrobotTest() {
	var key = [
		/digitalWrite/g,
		/delay/g,
		/13/g,
		/1000/g,
		/HIGH/g,
		/LOW/g
	];

	var keyzz = [
		2, 2, 7, 2, 1, 1
	];

	var keyflag = 0;

	var otextarea = document.getElementById('editor').innerHTML;

	for (var i = 0; i < key.length; i++) {
		var a = otextarea.match(key[i]).length;

		if (a == keyzz[i]) {
			keyflag++;
		} else {
			console.log(keyzz[i]+"error");
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