function kenrobotTest() {
	var key = [
		// /for/ig,
		/int i = 255;/ig,
		/i>0/ig,
		/;i--/ig,
		// /analogWrite\(3,i\);/ig,
		// /delay\(20\);/ig
	];

	var keyzz = [
		// "for",
		"int i = 255;",
		"i>0",
		";i--",
		// "analogWrite(3,i);",
		// "delay(20);"
	];

	var keyflag = 0;

	var otextarea = $("#Qipan").empty();
	otextarea = document.getElementById('foo').value;
	console.log(key.length);

	// console.log(otextarea.innerHTML);

	for (var i = 0; i < key.length; i++) {
		// console.log("keyflag" + keyflag);
		if (otextarea.match(key[i]) == keyzz[i]) {
			console.log(otextarea.match(key[i]));
			keyflag++;
			console.log(keyflag);

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