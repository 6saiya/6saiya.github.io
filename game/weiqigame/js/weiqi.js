window.onload = function() {
	var qipanlenth = 4;
	var qiziMode = ["img/whiteQizi.png", "img/blackQizi.png", "img/errorQizi.png"]
	var defenrotNUM = 4;
	var pageFlag = 0;
	var qusetion = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]

	];
	var answer = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	];
	// for (var i = 0; i < qipanlenth; i++) {
	// 	for (var j = 0; j < qipanlenth; j++) {
	// 		qusetion[i][j].push(0);
	// 		answer[i][j].push(0);
	// 	}
	// }

	//UI主菜单
	$(document).ready(function() {
		show(0);
		$(".startButton").click(function() {
			show(1);
		});
		$(".helpButton").click(function() {
			show(2);
		});
	});

	function show(flag) {
		pageFlag = flag;
		if (pageFlag == 0) {
			$("#mainMenu").show();
			$("#mainBg").hide();
			$("#help").hide();
		}
		if (pageFlag == 1) {
			$("#mainMenu").hide();
			$("#mainBg").show();
			$("#help").hide();

			window.setTimeout(showQusetion(),5000);
			console.log("showQusetion");
			window.setTimeout(showAnswer(), 5000);
			console.log("showAnswer");

		}
		if (pageFlag == 2) {
			$("#mainMenu").hide();
			$("#mainBg").hide();
			$("#help").show();
		}
	}
	//主游戏建盘
	function B_init() {
		for (var i = 0; i < defenrotNUM; i++) {
			var row = document.createElement("tr"); //创建行
			for (j = 0; j < defenrotNUM; j++) {
				var cell = document.createElement("td"); //创建列
				cell.setAttribute("id", (i * defenrotNUM) + j);
				cell.setAttribute("class", 0);
				cell.setAttribute("width", 50);
				cell.setAttribute("height", 50);
				// cell.setAttribute("style", "background-color: red;");
				row.appendChild(cell);
			}
			document.getElementById("Qipan").appendChild(row);

		}
	}
	B_init();

	//出題的函數
	function setupQizi() {
		var qiziX = 0;
		var qiziY = 0;
		qiziX = Math.floor(Math.random() * (4 - 1 + 1));
		qiziY = Math.floor(Math.random() * (4 - 1 + 1));
		qusetion[qiziX][qiziY] = 1;
	}

	function flagB() {
		var b = 0;
		for (var k = 0; k < 4; k++) {
			for (var j = 0; j < 4; j++) {
				b = b + qusetion[k][j];
			}
		}
		console.log(b);
		return b;
	}

	function chuti() {
		while (flagB() < defenrotNUM) {
			setupQizi();
		}
	}
	chuti();
	//建立棋盤
	function showQusetion() {
		$($("#0")[0]).html('<img src = "' + qiziMode[qusetion[0][0]] + '">');
		$($("#1")[0]).html('<img src = "' + qiziMode[qusetion[0][1]] + '">');
		$($("#2")[0]).html('<img src = "' + qiziMode[qusetion[0][2]] + '">');
		$($("#3")[0]).html('<img src = "' + qiziMode[qusetion[0][3]] + '">');
		$($("#4")[0]).html('<img src = "' + qiziMode[qusetion[1][0]] + '">');
		$($("#5")[0]).html('<img src = "' + qiziMode[qusetion[1][1]] + '">');
		$($("#6")[0]).html('<img src = "' + qiziMode[qusetion[1][2]] + '">');
		$($("#7")[0]).html('<img src = "' + qiziMode[qusetion[1][3]] + '">');
		$($("#8")[0]).html('<img src = "' + qiziMode[qusetion[2][0]] + '">');
		$($("#9")[0]).html('<img src = "' + qiziMode[qusetion[2][1]] + '">');
		$($("#10")[0]).html('<img src = "' + qiziMode[qusetion[2][2]] + '">');
		$($("#11")[0]).html('<img src = "' + qiziMode[qusetion[2][3]] + '">');
		$($("#12")[0]).html('<img src = "' + qiziMode[qusetion[3][0]] + '">');
		$($("#13")[0]).html('<img src = "' + qiziMode[qusetion[3][1]] + '">');
		$($("#14")[0]).html('<img src = "' + qiziMode[qusetion[3][2]] + '">');
		$($("#15")[0]).html('<img src = "' + qiziMode[qusetion[3][3]] + '">');
	}

	function showAnswer() {
		$($("#0")[0]).html('<img src = "' + qiziMode[answer[0][0]] + '">');
		$($("#1")[0]).html('<img src = "' + qiziMode[answer[0][1]] + '">');
		$($("#2")[0]).html('<img src = "' + qiziMode[answer[0][2]] + '">');
		$($("#3")[0]).html('<img src = "' + qiziMode[answer[0][3]] + '">');
		$($("#4")[0]).html('<img src = "' + qiziMode[answer[1][0]] + '">');
		$($("#5")[0]).html('<img src = "' + qiziMode[answer[1][1]] + '">');
		$($("#6")[0]).html('<img src = "' + qiziMode[answer[1][2]] + '">');
		$($("#7")[0]).html('<img src = "' + qiziMode[answer[1][3]] + '">');
		$($("#8")[0]).html('<img src = "' + qiziMode[answer[2][0]] + '">');
		$($("#9")[0]).html('<img src = "' + qiziMode[answer[2][1]] + '">');
		$($("#10")[0]).html('<img src = "' + qiziMode[answer[2][2]] + '">');
		$($("#11")[0]).html('<img src = "' + qiziMode[answer[2][3]] + '">');
		$($("#12")[0]).html('<img src = "' + qiziMode[answer[3][0]] + '">');
		$($("#13")[0]).html('<img src = "' + qiziMode[answer[3][1]] + '">');
		$($("#14")[0]).html('<img src = "' + qiziMode[answer[3][2]] + '">');
		$($("#15")[0]).html('<img src = "' + qiziMode[answer[3][3]] + '">');
	}
	showQusetion();

	//获取鼠标位置
	document.onmouseup = function() {
		var event_obj = event;
		mouseX = event_obj.clientX;
		mouseY = event_obj.clientY;
		console.log(mouseX + "+" + mouseY);
	}

	/////////////   finished   //////////////


}