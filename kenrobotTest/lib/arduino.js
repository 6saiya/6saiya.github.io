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
		var oBox = document.getElementById("editor");
		var oCont = oBox.innerHTML;
		var val = Ardduinokeywords[i];
		var fen = oCont.split(val);
		oBox.innerHTML = fen.join('<span class="ArduinoKeyWord" >' + val + '</span> ');
	}
	for (var i = 0; i < ArduinoBuiltins.length; i++) {
		var oBox = document.getElementById("editor");
		var oCont = oBox.innerHTML;
		var val = ArduinoBuiltins[i];
		var fen = oCont.split(val);
		oBox.innerHTML = fen.join('<span class="ArduinoBuiltins" >' + val + '</span> ');
	}
}