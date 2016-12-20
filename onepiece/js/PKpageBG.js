var setupdeck = function(argument, argument1) {

	function randomsort(a, b) {
		return Math.random() > .5 ? -1 : 1; //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
	}

	deck = [];

	for (var i = 0; i < argument.deckcard.length; i++) {
		deck.push(i);
	}

	deck.sort(randomsort);
	// console.log(deck);


	var oneleadset = document.getElementById('set11');
	var otherleadset = document.getElementById('set18');
	var bgImage = "url(img/" + testuser.lead + ".png)";
	oneleadset.style.backgroundImage = bgImage;
	// oneleadset.style.backgroundSize = "100px,100px";
	bgImage = "url(img/" + argument1.lead + ".png)";
	otherleadset.style.backgroundImage = bgImage;
}


var Round = 1;



var roundEND = function() {
	Round++;
	var showRound = document.getElementById('round');
	showRound.innerHTML = Round;
}


var showCard = function() {
	for (var i = 0; i < 6; i++) {
		var a = "card" + i;
		var b = document.getElementById(a);
		var c = deck[i];
		b.style.backgroundImage = "url(img/" + testuser.deckcard[c] + ".png)";
		b.style.left = i * 100 + "px";
	}


}

var bigCard = function(argument) {
	document.getElementById("card" + argument).style.width = "200px";
	document.getElementById("card" + argument).style.height = "300px";
	document.getElementById("card" + argument).style.backgroundSize = "200px,300px";
	document.getElementById("card" + argument).style.top = "-150px";
	if (argument < 5) {
		document.getElementById("card" + (argument + 1)).style.display = "none";
	}


}
var smallCard = function(argument) {
	document.getElementById("card" + argument).style.width = "100px";
	document.getElementById("card" + argument).style.height = "150px";
	document.getElementById("card" + argument).style.backgroundSize = "100px,150px";
	document.getElementById("card" + argument).style.top = 0;
	if (argument < 5) {
		document.getElementById("card" + (argument + 1)).style.display = "block";
	}
}

var useCard = function(argument) {

}