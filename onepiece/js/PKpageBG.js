var setupdeck = function(argument, argument1) {

	function randomsort(a, b) {
		return Math.random() > .5 ? -1 : 1; //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
	}

	var deck = [];

	for (var i = 0; i < argument.deckcard.length; i++) {
		deck.push(i);
	}

	deck.sort(randomsort);
	console.log(deck);

	var oneleadset = document.getElementById('set11');
	var otherleadset = document.getElementById('set18');
	var bgImage = "url(../img/" + testuser.lead + ".png);";
	console.log(bgImage);

	oneleadset.style.background = bgImage;

	console.log(oneleadset.style.background);
	bgImage = "url(../img/" + argument1.lead + ".png);";
	otherleadset.style.backgroundImage = bgImage;
	var Round = 0;
}