var sound = document.getElementById("sound");
	// sound.pause();
	// this.className = '';
var passtest = function() {
	if (allquesion[1] == 1 && allquesion[0] == 1) {
		var passpage = document.getElementById("passPage");
		passpage.style.display = "block";
		sound.play();
		this.className = 'mussic';
		$("#passPage").animate({opacity: 1}, 1000);
	} else {
		console.log("Dont Finished");
	}
}
