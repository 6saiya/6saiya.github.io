function kenrobotTest() {
	var key = [
		/for/g,
		/i/g,
		/255/g,
		/>/g,
		/--/g,
		/analogWrite/g,
		/delay/g,
		/20/g
	];

	var keyzz = [2, 447, 2, 326, 1, 2, 2, 5];

	var keyflag = 0;

	var otextarea = document.getElementById('editor').innerHTML;

	for (var i = 0; i < key.length; i++) {
		var a = otextarea.match(key[i]).length;
		console.log(a);
		if (a == keyzz[i]) {
			keyflag++;
			// console.log(keyflag);
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