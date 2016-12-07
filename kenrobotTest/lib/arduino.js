function ArduinoHighlight() {

	var ArduinoBuiltins = [
		"pinMode",
		"digitalWrite",
		"analogRead",
		"digitalRead",
		"analogWrite"
	];


	var Ardduinokeywords = [
		"delay"
	];
	for (var i = 0; i < Ardduinokeywords.length; i++) {
		var oBox = document.getElementById("output");
		var oCont = oBox.innerHTML;
		var oBn = document.getElementById("btn");
		var val = Ardduinokeywords[i];
		var fen = oCont.split(val);
		oBox.innerHTML = fen.join('<span class="ArduinoKeyWord" >' + val + '</span> ');
	}
	for (var i = 0; i < ArduinoBuiltins.length; i++) {
		var oBox = document.getElementById("output");
		var oCont = oBox.innerHTML;
		var oBn = document.getElementById("btn");
		var val = ArduinoBuiltins[i];
		var fen = oCont.split(val);
		// console.log(fen);
		oBox.innerHTML = fen.join('<span class="ArduinoBuiltins" >' + val + '</span> ');
	}

}