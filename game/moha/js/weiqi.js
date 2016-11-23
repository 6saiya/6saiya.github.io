// window.onload = function() {
// 	console.log("aaa");
// };

// $(function() {
// 	console.log("aaa");
// });

// $(document).ready(function() {
// 	console.log("aaa");
// });

$(function() {
	var gameQipanlenth = 4;
	var gamedefenrotNUM = 4;
	var gameFlag = 1;


	function game(qipanlenth, defenrotNUM) {
		var qiziMode = ["img/whiteQizi.png", "img/blackQizi.png", "img/errorQizi.png"];

		var qusetion = initQipanSize(qipanlenth, qipanlenth);
		var answer = initQipanSize(qipanlenth, qipanlenth);

		var pageFlag = 0;

		//UI主菜单
		// document.getElementById("canshu").write("难度:"+defenrotNUM+"回合：得分：");

		$(".startButton").click(function() {
			show(1);
		});
		$(".helpButton").click(function() {
			show(2);
		});
		show(0);

		B_init();

		chuti(qipanlenth);

		//获取鼠标位置
		// document.onmouseup = function() {
		// 	var event_obj = event;
		// 	mouseX = event_obj.clientX;
		// 	mouseY = event_obj.clientY;
		// 	console.log(mouseX + "+" + mouseY);
		// }

		document.addEventListener("mouseup", function(e) {
			// var event_obj = event;
			mouseX = e.clientX;
			mouseY = e.clientY;
			console.log(mouseX + "+" + mouseY);
		});

		//初始棋盘大小
		function initQipanSize(row, col) {
			var arr = [];
			var temp;
			for (var i = 0; i < row; i++) {
				temp = [];
				arr.push(temp);

				for (var j = 0; j < col; j++) {
					temp.push(0);
				}
			}

			return arr;
		}

		function show(flag) {
			pageFlag = flag;
			if (pageFlag == 0) {
				$("#mainMenu").show();
				$("#mainBg").hide();
				$("#help").hide();
				$(".victoryForm").hide();
				$(".error").hide();
			}
			if (pageFlag == 1) {
				$("#mainMenu").hide();
				$("#mainBg").show();
				$("#help").hide();
				$(".victoryForm").hide();
				$("#Qipan").show();
				$(".error").hide();

				// var t1 = window.setTimeout(function() {
				// 	showQusetion();
				// }, 5);

				var t1 = setTimeout(showQusetion, 5);
				console.log("showQusetion" + t1);

				// var t2 = window.setTimeout(function() {
				// 	showAnswer();
				// }, 2000);

				var t2 = setTimeout(showAnswer, 2000);
				console.log("showAnswer" + t2);
			}
			if (pageFlag == 2) {
				$("#mainMenu").hide();
				$("#mainBg").hide();
				$("#help").show();
				$(".victoryForm").hide();
				$(".error").hide();
			}
			if (pageFlag == 3) {
				$("#mainMenu").hide();
				$("#mainBg").show();
				$("#Qipan").hide();
				$("#help").hide();
				$(".error").hide();
				$(".victoryForm").show();
				setTimeout(function() {
					show(0);
					gameQipanlenth++;
					gamedefenrotNUM++;
					if (gameQipanlenth > 8) {
						gameQipanlenth = 8;
					}
					gameFlag = 1;
					console.log("gameQipanlenth" + gameQipanlenth);
					console.log("gamedefenrotNUM" + gamedefenrotNUM);
					game(gameQipanlenth, gamedefenrotNUM);
				}, 2000);

			}
		}

		//主游戏建盘
		function B_init() {
			var qipan = $("#Qipan").empty();

			for (var i = 0; i < qipanlenth; i++) {
				var tr = document.createElement("tr"); //创建行
				for (j = 0; j < qipanlenth; j++) {
					var cell = document.createElement("td"); //创建列
					cell.id = (i * qipanlenth) + j;
					cell.dataset.row = i;
					cell.dataset.col = j;
					cell.style.height = "50px";
					cell.style.width = "50px";
					cell.style.border = "none";
					cell.style.margin = "0";
					// cell.setAttribute("id", (i * defenrotNUM) + j);
					// cell.setAttribute("width", 50);
					// cell.setAttribute("height", 50);

					cell.addEventListener("click", qiziClick);

					// cell.setAttribute("style", "background-color: red;");
					tr.appendChild(cell);
				}
				qipan[0].appendChild(tr);

			}
		}

		//出題的函數
		function setupQizi() {
			var qiziX = 0;
			var qiziY = 0;
			qiziX = Math.floor(Math.random() * (qipanlenth - 1 + 1));
			qiziY = Math.floor(Math.random() * (qipanlenth - 1 + 1));
			qusetion[qiziX][qiziY] = 1;
		}

		function flagB(val) {
			var b = 0;
			for (var k = 0; k < val; k++) {
				for (var j = 0; j < val; j++) {
					b = b + qusetion[k][j];
				}
			}
			console.log(b);
			return b;
		}

		function chuti(val) {
			while (flagB(val) < defenrotNUM) {
				setupQizi();
			}
		}

		//建立棋盤
		function showQusetion() {
			for (var i = 0; i < qipanlenth; i++) {
				for (var j = 0; j < qipanlenth; j++) {
					var id = "#" + (i * qipanlenth + j);
					$($(id)[0]).html('<img src = "' + qiziMode[qusetion[i][j]] + '">');
				}
			}
		}

		function showAnswer() {
			for (var i = 0; i < qipanlenth; i++) {
				for (var j = 0; j < qipanlenth; j++) {
					var id = "#" + (i * qipanlenth + j);
					$($(id)[0]).html('<img src = "' + qiziMode[answer[i][j]] + '">');
				}
			}
			// $($("#0")[0]).html('<img src = "' + qiziMode[answer[0][0]] + '">');
		}
		//showQusetion();

		/////////////   finished   //////////////

		function panduanAAQ() {
			for (var i = 0; i < qipanlenth; i++) {
				for (var j = 0; j < qipanlenth; j++) {
					if (qusetion[i][j] != answer[i][j]) {
						return false;
					}
				}
			}
			return true;
		}

		//row: 行
		//col: 列
		function qiziClick(e) {
			var qizi = this;
			var row = qizi.dataset.row;
			var col = qizi.dataset.col;

			if (qusetion[row][col] == 1) {
				answer[row][col] = 1;
			} else {
				answer[row][col] = 2;
			}
			console.log("onclick" + answer[row][col]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		}
	}

	game(4, 4);

	// while (1) {
	// 	if (gameFlag == 1) {
	// 		gameFlag = 0;
	// 		game(gameQipanlenth, gamedefenrotNUM);
	// 	}
	// }

});