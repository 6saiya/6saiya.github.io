$(function() {
	var oDiv = document.getElementById('LED');
	var title = document.getElementsByTagName('h4')[0];

	function drag(box, title) {
		//当我传入一个参数，box，拖拽box,
		//当传入的是两个参数是，拖拽是在title
		var handle;
		title ? handle = title : handle = box;


		//点击事件||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
		handle.onmousedown = function(ev) {
			var oEv = ev || window.event;
			var disX = oEv.clientX - oDiv.offsetLeft;
			var disY = oEv.clientY - oDiv.offsetTop;

			document.onmousemove = function(ev) {
				var oEv = ev || window.event;
				var l = oEv.clientX - disX;
				var t = oEv.clientY - disY;

				//判断屏幕范围
				if (l < 0) l = 0;
				if (t < 0) t = 0;
				if (l > document.documentElement.clientWidth - oDiv.offsetWindth) {
					l = document.documentElement.clientWidth - oDiv.offsetWindth
				};
				if (t > document.documentElement.clientHidth - oDiv.offsetHindth) {
					t = document.documentElement.clientHidth - oDiv.offsetHindth
				};

				//最后赋值
				oDiv.style.left = l + "px";
				oDiv.style.top = t + "px";

			}
			return false;
		}
		title.onmouseup = function() {
				document.onmousemove = null;
			}
			//document.getElementsByTagName('input')[0].onmousedown=function(){
			//var oEv=ev||window.event;
			//oEv.cancelBubble=true;
			//}
	};
	drag(oDiv, title);

});