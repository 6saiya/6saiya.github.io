window.onload = function() {
	function game(qipanlenth, defenrotNUM) {
		// body...

		// var qipanlenth = 4;
		var qiziMode = ["img/whiteQizi.png", "img/blackQizi.png", "img/errorQizi.png"]
			// var defenrotNUM = 4;
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
		// document.getElementById("canshu").write("难度:"+defenrotNUM+"回合：得分：");

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
				$(".victoryForm").hide();
			}
			if (pageFlag == 1) {
				$("#mainMenu").hide();
				$("#mainBg").show();
				$("#help").hide();
				$(".victoryForm").hide();
				$("#Qipan").show();

				var t1 = window.setTimeout(function() {
					showQusetion();
				}, 5);
				console.log("showQusetion" + t1);
				var t2 = window.setTimeout(function() {
					showAnswer();
				}, 4000);
				console.log("showAnswer" + t2);


			}
			if (pageFlag == 2) {
				$("#mainMenu").hide();
				$("#mainBg").hide();
				$("#help").show();
				$(".victoryForm").hide();
			}
			if (pageFlag == 3) {
				$("#mainMenu").hide();
				$("#mainBg").show();
				$("#Qipan").hide();
				$("#help").hide();
				$(".victoryForm").show();
				var t1 = window.setTimeout(function() {
					show(0);
				}, 2000);
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
					cell.setAttribute("border", 0);
					cell.setAttribute("margin", 0);
					cell.setAttribute("padding", 0);

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
		chuti(qipanlenth);
		//建立棋盤
		function showQusetion() {

			for (var i = 0; i < qipanlenth; i++) {
				for (var j = 0; j < qipanlenth; j++) {
					var id = "#" + (i * 4 + j);
					$($(id)[0]).html('<img src = "' + qiziMode[qusetion[i][j]] + '">');
				}
			}
		}

		function showAnswer() {
			for (var i = 0; i < qipanlenth; i++) {
				for (var j = 0; j < qipanlenth; j++) {
					var id = "#" + (i * 4 + j);
					$($(id)[0]).html('<img src = "' + qiziMode[answer[i][j]] + '">');
				}
			}
			// $($("#0")[0]).html('<img src = "' + qiziMode[answer[0][0]] + '">');
		}
		//showQusetion();

		//获取鼠标位置
		document.onmouseup = function() {
			var event_obj = event;
			mouseX = event_obj.clientX;
			mouseY = event_obj.clientY;
			console.log(mouseX + "+" + mouseY);
		}

		/////////////   finished   //////////////

		//answer chick
		/*
		获取点击div event {
			answer[][] = 1;
			if（ answer[][] == qusetion[][]） {
				showAnswer();
			}
			else {
				answer[][] = 2;
			}
			if (answer == qusetion) {
				defenrotNUM++;
				qipanlenth++;
				if (qipanlenth > 8) {
					qipanlenth = 8;
				}
				var t1 = window.setTimeout(function() {
					$("#victory").show();
				}, 5);
				show(1);
			}
		}
		*/
		/*
		function testNew() {
			for (var i = 0; i < qipanlenth; i++) {
				for (var j = 0; j < qipanlenth; j++) {
					answer[i][j] = qusetion[i][j];
				}
			}
			console.log("testNew");

			// if (answer == qusetion) {
			// 	defenrotNUM++;
			// 	qipanlenth++;
			// 	if (qipanlenth > 8) {
			// 		qipanlenth = 8;
			// 	}
			console.log("victory");
			$("#victory").show();
			var t1 = window.setTimeout(function() {
				show(1);
				$("#victory").hide();
			}, 3000);
			console.log("over");
		}
		*/
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
		//div onclick event
		$('#0').click(function() {
			if (qusetion[0][0] == 1) {
				answer[0][0] = 1;
			} else {
				answer[0][0] = 2;
			}
			console.log("onclick" + answer[0][0]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#1').click(function() {
			if (qusetion[0][1] == 1) {
				answer[0][1] = 1;
			} else {
				answer[0][1] = 2;
			}
			console.log("onclick" + answer[0][1]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#2').click(function() {
			if (qusetion[0][2] == 1) {
				answer[0][2] = 1;
			} else {
				answer[0][2] = 2;
			}
			console.log("onclick" + answer[0][2]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#3').click(function() {
			if (qusetion[0][3] == 1) {
				answer[0][3] = 1;
			} else {
				answer[0][3] = 2;
			}
			console.log("onclick" + answer[0][3]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#4').click(function() {
			if (qusetion[1][0] == 1) {
				answer[1][0] = 1;
			} else {
				answer[1][0] = 2;
			}
			console.log("onclick" + answer[1][0]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#5').click(function() {
			if (qusetion[1][1] == 1) {
				answer[1][1] = 1;
			} else {
				answer[1][1] = 2;
			}
			console.log("onclick" + answer[1][1]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#6').click(function() {
			if (qusetion[1][2] == 1) {
				answer[1][2] = 1;
			} else {
				answer[1][2] = 2;
			}
			console.log("onclick" + answer[1][2]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#7').click(function() {
			if (qusetion[1][3] == 1) {
				answer[1][3] = 1;
			} else {
				answer[1][3] = 2;
			}
			console.log("onclick" + answer[1][3]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#8').click(function() {
			if (qusetion[2][0] == 1) {
				answer[2][0] = 1;
			} else {
				answer[2][0] = 2;
			}
			console.log("onclick" + answer[2][0]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#9').click(function() {
			if (qusetion[2][1] == 1) {
				answer[2][1] = 1;
			} else {
				answer[2][1] = 2;
			}
			console.log("onclick" + answer[2][1]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#10').click(function() {
			if (qusetion[2][2] == 1) {
				answer[2][2] = 1;
			} else {
				answer[2][2] = 2;
			}
			console.log("onclick" + answer[2][2]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#11').click(function() {
			if (qusetion[2][3] == 1) {
				answer[2][3] = 1;
			} else {
				answer[2][3] = 2;
			}
			console.log("onclick" + answer[2][3]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#12').click(function() {
			if (qusetion[3][0] == 1) {
				answer[3][0] = 1;
			} else {
				answer[3][0] = 2;
			}
			console.log("onclick" + answer[3][0]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#13').click(function() {
			if (qusetion[3][1] == 1) {
				answer[3][1] = 1;
			} else {
				answer[3][1] = 2;
			}
			console.log("onclick" + answer[3][1]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#14').click(function() {
			if (qusetion[3][2] == 1) {
				answer[3][2] = 1;
			} else {
				answer[3][2] = 2;
			}
			console.log("onclick" + answer[3][2]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		})
		$('#15').click(function() {
			if (qusetion[3][3] == 1) {
				answer[3][3] = 1;
			} else {
				answer[3][3] = 2;
			}
			console.log("onclick" + answer[3][3]);
			showAnswer();
			if (panduanAAQ()) {
				console.log("win");
				$(document).ready(function() {
					show(3);
				});
			} else {
				console.log("error")
			}
		});
	}
	game(4, 4);


}