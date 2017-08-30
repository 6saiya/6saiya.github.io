(function(root, factory) {
	if(typeof define === 'function' && define.amd) {
		define(factory);
	} else if(typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.game = factory();
	}
}(this, function() {
	var BLACK = "black";
	var WHITE = "white";

	var size = 40;
	var board;
	var num;
	var pieces = [];
	var step = 0;
	var turn = BLACK;

	function init(_board, n) {
		board = _board;
		num = parseInt((n + 1) / 2) * 2;

		board.classList.add("board");
		board.style.width = num * size + "px";
		board.style.height = num * size + "px";

		var count = num * num;
		for(var i = 0; i < count; i++) {
			var piece = document.createElement("div");
			piece.classList.add("piece");
			piece.dataset.index = i;
			piece.addEventListener("click", onPieceClick);
			board.appendChild(piece);

			pieces.push(piece);
		}

		var center = parseInt(num / 2);
		stepPiece(center - 1 + (center - 1) * num);
		stepPiece(center + (center - 1) * num);
		stepPiece(center + center * num);
		stepPiece(center - 1 + center * num);

	}

	function reset(n) {
		if(!board) {
			return;
		}

		board.childNodes.forEach(function(child) {
			child.remove();
		});
		pieces = [];
		step = 0;
		turn = BLACK;

		init(board, n || num);
	}

	function over() {
		console.log("game over");
	}

	function onPieceClick(e) {
		var piece = this;
		if(piece.dataset.step) {
			return;
		}

		stepPiece(piece.dataset.index);
	}

	function stepPiece(index) {
		var piece = pieces[index];
		piece.classList.add(turn);
		// console.log(piece.classList);
		piece.dataset.color = turn;
		piece.dataset.step = step;
		step++;

		if(step == num * num) {
			over();
			return;
		}

///////////      修 改        ////////
		var left = index % num;
		var right = num - left - 1;
		var top = parseInt(index / 8);
		var down = num - top -1;
		var lefttop = left > top ? top : left;
		var righttop = right > top ? top : right;
		var leftdown = left > down ? down : left;
		var rightdown = right > down ? down : right;

		var fanzhuanNum = 0;
		var fanzhuanpiece;
		var edturn = turn == BLACK ? WHITE : BLACK;
		var fanzhuan = "piece " + edturn;

		//左
		if (left>1) {
			fanzhuanpiece = pieces[index-1];
			if (fanzhuanpiece.classList.value == fanzhuan) {
				for (var i = 1; i < left; i++) {
					fanzhuanpiece=pieces[index-i];
					if (fanzhuanpiece.classList.value == fanzhuan) {
						fanzhuanNum++;
					}
					else if (fanzhuanpiece.classList.value == piece.classList.value) {
						break;
					}
					else{
						fanzhuanNum = 0;
						break;
					}
				}
			}
			if (fanzhuanNum > 0) {
				for (var i = 0; i < fanzhuanNum; i++) {
					pieces[index-1-i].classList.remove(edturn);
					pieces[index-1-i].classList.add(turn);				
				}
				fanzhuanNum = 0;
			}
		}
		
		//右
		if (right>1) {
			fanzhuanpiece = pieces[(index-0+1)];
			if (fanzhuanpiece.classList.value == fanzhuan) {
				for (var i = 1; i < right; i++) {
					fanzhuanpiece = pieces[index - 0 + i];
					if (fanzhuanpiece.classList.value == fanzhuan) {
						fanzhuanNum++;
					}
					else if (fanzhuanpiece.classList.value == piece.classList.value) {
						break;
					}
					else{
						fanzhuanNum = 0;
						break;
					}
				}
			}
			if (fanzhuanNum > 0) {
				for (var i = 0; i < fanzhuanNum; i++) {
					pieces[index-0+1+i].classList.remove(edturn);
					pieces[index-0+1+i].classList.add(turn);				
				}
				fanzhuanNum = 0;
			}
		}

		//上
		if (top>1) {
			fanzhuanpiece = pieces[index-num];
			if (fanzhuanpiece.classList.value == fanzhuan) {
				for (var i = 1; i < top; i++) {
					fanzhuanpiece=pieces[index-i*num];
					if (fanzhuanpiece.classList.value == fanzhuan) {
						fanzhuanNum++;
					}
					else if (fanzhuanpiece.classList.value == piece.classList.value) {
						break;
					}
					else{
						fanzhuanNum = 0;
						break;
					}
				}
			}
			if (fanzhuanNum > 0) {
				for (var i = 0; i < fanzhuanNum; i++) {
					pieces[index-i*num-num].classList.remove(edturn);
					pieces[index-i*num-num].classList.add(turn);				
				}
				fanzhuanNum = 0;
			}
		}

		//下
		if (down>1) {
			fanzhuanpiece = pieces[(index-0+num)];
			if (fanzhuanpiece.classList.value == fanzhuan) {
				for (var i = 1; i < down; i++) {
					fanzhuanpiece=pieces[index-0+i*num];
					if (fanzhuanpiece.classList.value == fanzhuan) {
						fanzhuanNum++;
					}
					else if (fanzhuanpiece.classList.value == piece.classList.value) {
						break;
					}
					else{
						fanzhuanNum = 0;
						break;
					}
				}
			}
			if (fanzhuanNum > 0) {
				for (var i = 0; i < fanzhuanNum; i++) {
					pieces[index-0+i*num+num].classList.remove(edturn);
					pieces[index-0+i*num+num].classList.add(turn);				
				}
				fanzhuanNum = 0;
			}
		}

		//左上
		if (lefttop>1) {
			fanzhuanpiece = pieces[index-1-num];
			if (fanzhuanpiece.classList.value == fanzhuan) {
				for (var i = 1; i < lefttop; i++) {
					fanzhuanpiece=pieces[index-i-i*num];
					if (fanzhuanpiece.classList.value == fanzhuan) {
						fanzhuanNum++;
					}
					else if (fanzhuanpiece.classList.value == piece.classList.value) {
						break;
					}
					else{
						fanzhuanNum = 0;
						break;
					}
				}
			}
			if (fanzhuanNum > 0) {
				for (var i = 0; i < fanzhuanNum; i++) {
					pieces[index-(1+i)*(num+1)].classList.remove(edturn);
					pieces[index-(1+i)*(num+1)].classList.add(turn);				
				}
				fanzhuanNum = 0;
			}
		}

		//左下
		if (leftdown>1) {
			fanzhuanpiece = pieces[index-1+num];
			if (fanzhuanpiece.classList.value == fanzhuan) {
				for (var i = 1; i < leftdown; i++) {
					fanzhuanpiece=pieces[index-i+i*num];
					if (fanzhuanpiece.classList.value == fanzhuan) {
						fanzhuanNum++;
					}
					else if (fanzhuanpiece.classList.value == piece.classList.value) {
						break;
					}
					else{
						fanzhuanNum = 0;
						break;
					}
				}
			}
			if (fanzhuanNum > 0) {
				for (var i = 0; i < fanzhuanNum; i++) {
					pieces[index-0+(i+1)*(num-1)].classList.remove(edturn);
					pieces[index-0+(i+1)*(num-1)].classList.add(turn);				
				}
				fanzhuanNum = 0;
			}
		}


		//右下
		if (rightdown>1) {
			fanzhuanpiece = pieces[index-0+1+num];
			if (fanzhuanpiece.classList.value == fanzhuan) {
				for (var i = 1; i < rightdown; i++) {
					fanzhuanpiece=pieces[index-0+i+i*num];
					if (fanzhuanpiece.classList.value == fanzhuan) {
						fanzhuanNum++;
					}
					else if (fanzhuanpiece.classList.value == piece.classList.value) {
						break;
					}
					else{
						fanzhuanNum = 0;
						break;
					}
				}
			}
			if (fanzhuanNum > 0) {
				for (var i = 0; i < fanzhuanNum; i++) {
					pieces[index-0+(1+i)*(num+1)].classList.remove(edturn);
					pieces[index-0+(1+i)*(num+1)].classList.add(turn);				
				}
				fanzhuanNum = 0;
			}
		}

		//右上
		if (righttop>1) {
			fanzhuanpiece = pieces[index-num+1];
			if (fanzhuanpiece.classList.value == fanzhuan) {
				for (var i = 1; i < righttop; i++) {
					fanzhuanpiece=pieces[index-i*num+i];
					if (fanzhuanpiece.classList.value == fanzhuan) {
						fanzhuanNum++;
					}
					else if (fanzhuanpiece.classList.value == piece.classList.value) {
						break;
					}
					else{
						fanzhuanNum = 0;
						break;
					}
				}
			}
			if (fanzhuanNum > 0) {
				for (var i = 0; i < fanzhuanNum; i++) {
					pieces[index-(i+1)*(num-1)].classList.remove(edturn);
					pieces[index-(i+1)*(num-1)].classList.add(turn);				
				}
				fanzhuanNum = 0;
			}
		}





///////////      修 改        ////////
		turn = edturn;
		

	}

	function addClass(items, cls) {
		items = typeof items == "array" ? items : [items];
		items.forEach(function(item) {
			item.classList.add(cls);
		});
	}

	function removeClass(items, cls) {
		items = typeof items == "array" ? items : [items];
		items.forEach(function(item) {
			item.classList.remove(cls);
		});
	}

	// function switchClass(items, cls1, cls2) {
	// 	items = typeof items == "array" ? items : [items];
	// 	items.forEach(function(item) {
	// 		if(item.classList.contains(cls1)) {
	// 			item.classList.remove(cls1);
	// 			item.classList.add(cls2);
	// 		} else {
	// 			item.classList.remove(cls2);
	// 			item.classList.add(cls1);
	// 		}
	// 	});
	// }

	return {
		init: init,
		reset: reset,
	}
}));